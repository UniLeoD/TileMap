var myMap = (function (_super) {
    __extends(myMap, _super);
    function myMap() {
        _super.call(this);
        this._column = 10;
        this._row = 10;
        this.config = [
            { x: 0, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 2, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 7, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 0, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 2, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 7, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 1, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 2, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 7, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 2, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 2, walkable: false, image: "Box_jpg" },
            { x: 3, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 7, walkable: false, image: "Box_jpg" },
            { x: 3, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 3, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 2, walkable: false, image: "Box_jpg" },
            { x: 4, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 7, walkable: false, image: "Box_jpg" },
            { x: 4, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 4, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 2, walkable: false, image: "Box_jpg" },
            { x: 5, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 7, walkable: false, image: "Box_jpg" },
            { x: 5, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 5, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 6, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 6, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 6, y: 2, walkable: false, image: "Box_jpg" },
            { x: 6, y: 3, walkable: false, image: "Box_jpg" },
            { x: 6, y: 4, walkable: false, image: "Box_jpg" },
            { x: 6, y: 5, walkable: false, image: "Box_jpg" },
            { x: 6, y: 6, walkable: false, image: "Box_jpg" },
            { x: 6, y: 7, walkable: false, image: "Box_jpg" },
            { x: 6, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 6, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 2, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 7, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 7, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 2, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 7, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 8, y: 9, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 0, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 1, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 2, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 3, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 4, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 5, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 6, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 7, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 8, walkable: true, image: "Grass_jpg" },
            { x: 9, y: 9, walkable: true, image: "Grass_jpg" },
        ];
        for (var i = 0; i < this.config.length; i++) {
            var tiledata = new TileData(this.config[i].walkable, this.config[i].image, this.config[i].x, this.config[i].y);
            var bitmap = new Tile(tiledata);
            this.addChild(bitmap);
        }
    }
    var d = __define,c=myMap,p=c.prototype;
    return myMap;
}(egret.DisplayObjectContainer));
egret.registerClass(myMap,'myMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        bitmap.height = Tile.TILE_SIZE;
        bitmap.width = Tile.TILE_SIZE;
        bitmap.x = data.x * Tile.TILE_SIZE;
        bitmap.y = data.y * Tile.TILE_SIZE;
    }
    var d = __define,c=Tile,p=c.prototype;
    Tile.TILE_SIZE = 64;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
var TileData = (function (_super) {
    __extends(TileData, _super);
    function TileData(walkable, image, x, y) {
        _super.call(this);
        this.walkable = walkable;
        this.image = image;
        this.x = x;
        this.y = y;
    }
    var d = __define,c=TileData,p=c.prototype;
    return TileData;
}(egret.DisplayObjectContainer));
egret.registerClass(TileData,'TileData');
