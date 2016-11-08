var Grid = (function () {
    function Grid(numCols, numRows, TileData) {
        this._numCols = numCols;
        this._numRows = numRows;
        this._nodes = new Array();
        for (var i = 0; i < this._numCols; i++) {
            this._nodes[i] = new Array();
            for (var j = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new myNode(i, j);
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    p.getNode = function (x, y) {
        return this._nodes[x][y];
    };
    p.setEndNode = function (x, y) {
        this._endNode = this._nodes[x][y];
    };
    p.setStartNode = function (x, y) {
        this._startNode = this._nodes[x][y];
    };
    p.setWalkable = function (x, y, value) {
        this._nodes[x][y].walkable = value;
    };
    p.getendNode = function () {
        return this._endNode;
    };
    p.getnumCols = function () {
        return this._numCols;
    };
    p.getnumRows = function () {
        return this._numRows;
    };
    /**
    * Returns the start node.
    */
    p.getstartNode = function () {
        return this._startNode;
    };
    return Grid;
}());
egret.registerClass(Grid,'Grid');
