class myMap extends egret.DisplayObjectContainer {

    _block: egret.Bitmap;
    config: Array<any>;
    _column: number = 10;
    _row: number = 10;
    _moveX: number[];
    _moveY: number[];
    constructor() {
        super();
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

        ]
  for (var i = 0; i < this.config.length; i++) {
            var tiledata: TileData = new TileData(this.config[i].x, this.config[i].y, this.config[i].walkable, this.config[i].image);
            var bitmap: Tile = new Tile(tiledata);
            this.addChild(bitmap);
        }
    }
}


class Tile extends egret.DisplayObjectContainer {
    public static TILE_SIZE = 64;
    tiledata: TileData;
    constructor(tiledata: TileData) {
        super();
        this.tiledata = tiledata;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(tiledata.image);
        bitmap.height = Tile.TILE_SIZE;
        bitmap.width = Tile.TILE_SIZE;
        bitmap.x = tiledata.x * Tile.TILE_SIZE;
        bitmap.y = tiledata.y * Tile.TILE_SIZE;
    }
}

class TileData extends egret.DisplayObjectContainer {
    public walkable: boolean;
    public image: string;
    constructor(x: number, y: number, walkable: boolean, image: string) {
        super();
        this.x = x;
        this.y = y;
        this.walkable = walkable;
        this.image = image;
        
    }
}
