class AStar {
    _open: Array<any>;
    _closed: Array<any>;
    _grid: Grid;
    _endNode: myNode;
    _startNode: myNode;
    _path: Array<any>;

    _heuristic: Function = this.diagonal;
    _straightCost: number = 1.0;
    _diagCost: number = Math.SQRT2;
    constructor() {

    }

    public findPath(grid: Grid): Boolean {
        this._grid = grid;
        this._open = new Array();
        this._closed = new Array();
        this._startNode = this._grid._startNode;
        this._endNode = this._grid._endNode;
        this._startNode.g = 0;
        this._startNode.h = this._heuristic(this._startNode);
        this._startNode.f = this._startNode.g + this._startNode.h;
        return this.search();
    }


    public search(): Boolean {
        var node: myNode = this._startNode;
        while (node != this._endNode) {
            var startX: number = Math.max(0, node.x - 1);
            var endX: number = Math.min(this._grid._numCols - 1, node.x + 1);
            var startY: number = Math.max(0, node.y - 1);
            var endY: number = Math.min(this._grid._numRows - 1, node.y + 1);
            for (var i: number = startX; i <= endX; i++) {
                for (var j: number = startY; j <= endY; j++) {
                    var test: myNode = this._grid.getNode(i, j);
                    if (test == node || !test.walkable || !this._grid.getNode(node.x, test.y).walkable || !this._grid.getNode(test.x, node.y).walkable)
                    { continue; }
                    var cost: number = this._straightCost; if (!((node.x == test.x) || (node.y == test.y)))
                    { cost = this._diagCost; }
                    var g: number = node.g + cost * test.costMultiplier;
                    var h: number = this._heuristic(test);
                    var f: number = g + h;
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = node;
                        }
                    } else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = node;
                        this._open.push(test);
                    }
                }
            }


            //for (var o: number = 0; o < this._open.length; o++) { }
            this._closed.push(node);
            if (this._open.length == 0) {
                alert("no path found");
                return false
            }

       //     this._open.sortOn("f", Array.NUMERIC);
       this._open.sort(function (a,b) {
           return a.f - b.f;
       })
            node = this._open.shift() as myNode;
        }
        this.buildPath();
        return true;
    }


    public isOpen(node: myNode): Boolean {
        for (var i: number = 0; i < this._open.length; i++) {
            if (this._open[i] == node) {
                return true;
            }
        }
        return false;
    }

    public isClosed(node: myNode): Boolean {
        for (var i: number = 0; i < this._closed.length; i++) {
            if (this._closed[i] == node) {
                return true;
            }
        }
        return false;

    }


    public buildPath(): void {

        this._path = new Array();
        var node: myNode = this._endNode;
        this._path.push(node);
        while (node != this._startNode) {
            node = node.parent;
            this._path.unshift(node);
        }
    }
        public manhattan(node: myNode): Number {

            return Math.abs(node.x - this._endNode.x) * this._straightCost + Math.abs(node.y + this._endNode.y) * this._straightCost;
        }

        public  euclidian(node: myNode): number {
            var dx: number = node.x - this._endNode.x;
            var dy: number = node.y - this._endNode.y;
            return Math.sqrt(dx * dx + dy * dy) * this._straightCost;
        }


        public  diagonal(node:myNode):number { 
            var dx:number = Math.abs(node.x - this._endNode.x); 
            var dy:number = Math.abs(node.y - this._endNode.y); 
            var diag:number = Math.min(dx, dy); 
            var straight:number = dx + dy;
             return this._diagCost * diag + this._straightCost * (straight - 2 * diag); 
            
        }