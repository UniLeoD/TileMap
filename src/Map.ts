class myMap extends egret.DisplayObjectContainer {

    config: Array<any>;
    moveX: number[];
    moveY: number[];
    player: Character;
    grid: Grid;

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

        ];
        this.grid = new Grid(10, 10, this.config);

        for (var i = 0; i < this.config.length; i++) {
            var tiledata: TileData = new TileData(this.config[i].x, this.config[i].y, this.config[i].walkable, this.config[i].image);
            var tile: Tile = new Tile(tiledata);
            if (i / 10 == 0)
                this.grid._nodes[i / 10] = new Array();
            this.grid._nodes[Math.floor( i / 10)][i % 10] = new myNode(
                this.config[i]);
            this.addChild(tile);
        }
        this.player = new Character();
        this.addChild(this.player);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_END, (e) => {
            this.Map_find(e.stageX, e.stageY);
            //console.log("X:" + e.stageX + "Y:" + e.stageY);
        }, this);
    }

    private Map_find(clickX: number, clickY: number) {
        var bodyX: number = Math.floor(this.player.x / Tile.TILE_SIZE);
        var bodyY: number = Math.floor(this.player.y / Tile.TILE_SIZE);
        var gridX: number = Math.floor(clickX / Tile.TILE_SIZE);
        var gridY: number = Math.floor(clickY / Tile.TILE_SIZE);
        this.grid.setStartNode(bodyX, bodyY);
        this.grid.setEndNode(gridX, gridY);
        var Astar = new AStar();
        if (Astar.findPath(this.grid)) {
            this.player.movePath=Astar._path;   
            this.player.move();
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
