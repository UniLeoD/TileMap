class Character extends egret.DisplayObjectContainer {
    character: egret.MovieClip;
    PlayerStateMachine: StateMachine;
    movePath: Array<{ x: number, y: number }> = new Array;



    constructor() {
        super();
        var _mcData = RES.getRes("man_json");
        var _mcTexture = RES.getRes("man_png");
        var _mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(_mcData, _mcTexture);

        this.character = new egret.MovieClip(_mcDataFactory.generateMovieClipData("man"));
        this.character.x = -50;
        this.character.y = -50;
        this.PlayerStateMachine = new StateMachine();


        this.addChild(this.character);


        this.character.gotoAndPlay("idle", 100);
    }

    move() {
        this.PlayerStateMachine.setState(new PlayerMoveState(this));
    }

    idle() {
        if (this.movePath.length)
            this.move();
        this.PlayerStateMachine.setState(new PlayerIdleState(this));
    }
}


class StateMachine {
    _currentState: State;
    setState(s: State) {
        if (this._currentState) {
            this._currentState.onExit();
        }

        this._currentState = s;
        this._currentState.onEnter();
    }
}


interface State {
    onEnter();
    onExit();
}


class PlayerState implements State {

    _player: Character;
    constructor(player: Character) {
        this._player = player;
    }

    onEnter() { }
    onExit() { }
}

class PlayerMoveState extends PlayerState {
    _targetX: number;
    _targetY: number;
    constructor(player: Character) {
        super(player);
        var temp = player.movePath.pop();
        this._targetX = temp.x * Tile.TILE_SIZE;
        this._targetY = temp.y * Tile.TILE_SIZE;
        console.log("target:" + Math.floor( this._targetX / Tile.TILE_SIZE) + " " +  Math.floor( this._targetY / Tile.TILE_SIZE));
    }
    onEnter() {
        var time: number = (Math.sqrt((this._targetX - this._player.x) * (this._targetX - this._player.x)  + (this._targetY - this._player.y) * (this._targetY - this._player.y)));
        this._player.character.gotoAndPlay("run");
        var tw = egret.Tween.get(this._player);
        tw.to({ x: this._targetX, y: this._targetY }, time).call(
            this._player.idle , this._player);

    }
}

class PlayerIdleState extends PlayerState {

    onEnter() {
        this._player.character.gotoAndPlay("idle");
    }
}