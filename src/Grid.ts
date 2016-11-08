class Grid {
     _startNode: myNode;
     _endNode: myNode;
     _nodes: Array<any>;
    _numCols: number;
     _numRows: number;


    constructor(numCols: number, numRows: number, TileData:TileData[]) {
        this._numCols = numCols;
        this._numRows = numRows;
        this._nodes = new Array();
        for (var i: number = 0; i < this._numCols; i++) {
            this._nodes[i] = new Array();
            for (var j: number = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new myNode(i, j);
            }
        }
    }
    public getNode(x: number, y: number): myNode {
        return this._nodes[x][y] as myNode;
    }

    public setEndNode(x: number, y: number): void {
        this._endNode = this._nodes[x][y] as myNode;
    }


    public setStartNode(x: number, y: number): void {
        this._startNode = this._nodes[x][y] as myNode;
    }

    public setWalkable(x: number, y: number, value: Boolean): void {
        this._nodes[x][y].walkable = value;
    }

    public getendNode(): myNode {
        return this._endNode;
    }

    public getnumCols(): number {
        return this._numCols;
    }
    public getnumRows(): number {
        return this._numRows;
    }
    /**
    * Returns the start node.
    */
    public getstartNode(): myNode {
        return this._startNode;
    }

}