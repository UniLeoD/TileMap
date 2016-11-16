var Character = (function (_super) {
    __extends(Character, _super);
    function Character() {
        _super.call(this);
        this.movePath = new Array;
        var _mcData = RES.getRes("man_json");
        var _mcTexture = RES.getRes("man_png");
        var _mcDataFactory = new egret.MovieClipDataFactory(_mcData, _mcTexture);
        this.character = new egret.MovieClip(_mcDataFactory.generateMovieClipData("man"));
        this.character.x = -50;
        this.character.y = -50;
        this.PlayerStateMachine = new StateMachine();
        this.addChild(this.character);
        this.character.gotoAndPlay("idle", 100);
    }
    var d = __define,c=Character,p=c.prototype;
    p.move = function () {
        this.PlayerStateMachine.setState(new PlayerMoveState(this));
    };
    p.idle = function () {
        if (this.movePath.length)
            this.move();
        this.PlayerStateMachine.setState(new PlayerIdleState(this));
    };
    return Character;
}(egret.DisplayObjectContainer));
egret.registerClass(Character,'Character');
var StateMachine = (function () {
    function StateMachine() {
    }
    var d = __define,c=StateMachine,p=c.prototype;
    p.setState = function (s) {
        if (this._currentState) {
            this._currentState.onExit();
        }
        this._currentState = s;
        this._currentState.onEnter();
    };
    return StateMachine;
}());
egret.registerClass(StateMachine,'StateMachine');
var PlayerState = (function () {
    function PlayerState(player) {
        this._player = player;
    }
    var d = __define,c=PlayerState,p=c.prototype;
    p.onEnter = function () { };
    p.onExit = function () { };
    return PlayerState;
}());
egret.registerClass(PlayerState,'PlayerState',["State"]);
var PlayerMoveState = (function (_super) {
    __extends(PlayerMoveState, _super);
    function PlayerMoveState(player) {
        _super.call(this, player);
        var temp = player.movePath.pop();
        this._targetX = temp.x * Tile.TILE_SIZE;
        this._targetY = temp.y * Tile.TILE_SIZE;
        console.log("target:" + Math.floor(this._targetX / Tile.TILE_SIZE) + " " + Math.floor(this._targetY / Tile.TILE_SIZE));
    }
    var d = __define,c=PlayerMoveState,p=c.prototype;
    p.onEnter = function () {
        var time = (Math.sqrt((this._targetX - this._player.x) * (this._targetX - this._player.x) + (this._targetY - this._player.y) * (this._targetY - this._player.y)));
        this._player.character.gotoAndPlay("run");
        var tw = egret.Tween.get(this._player);
        tw.to({ x: this._targetX, y: this._targetY }, time).call(this._player.idle, this._player);
    };
    return PlayerMoveState;
}(PlayerState));
egret.registerClass(PlayerMoveState,'PlayerMoveState');
var PlayerIdleState = (function (_super) {
    __extends(PlayerIdleState, _super);
    function PlayerIdleState() {
        _super.apply(this, arguments);
    }
    var d = __define,c=PlayerIdleState,p=c.prototype;
    p.onEnter = function () {
        this._player.character.gotoAndPlay("idle");
    };
    return PlayerIdleState;
}(PlayerState));
egret.registerClass(PlayerIdleState,'PlayerIdleState');
