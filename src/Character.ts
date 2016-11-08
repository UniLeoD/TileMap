class Character extends egret.DisplayObjectContainer {
    character:egret.MovieClip;
    PlayerStateMachine: StateMachine;
    
    

    constructor() {
        super();
        var _mcData = RES.getRes("man_json");
        var _mcTexture = RES.getRes("man_png");
        var _mcDataFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(_mcData, _mcTexture);
        
        this.character = new egret.MovieClip( _mcDataFactory.generateMovieClipData( "man" ) );
        this.character.x = -50;
        this.character.y = -50;
        this.PlayerStateMachine = new StateMachine();
 

        this.addChild(this.character);


        this.character.gotoAndPlay("idle",100);
    }

    move(targetX: number, targetY: number) {
        this.PlayerStateMachine.setState(new PlayerMoveState(this, targetX, targetY));
    }

    idle() {
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

    onEnter() {}
    onExit() {}
}

class PlayerMoveState extends PlayerState {
    _targetX: number;
    _targetY: number;
    constructor(player: Character, targetX: number, targetY: number) {
        super(player);
        this._targetX = targetX - 130;
        this._targetY = targetY - 120;
    }
    onEnter() {
        this._player.character.gotoAndPlay("run");
        var tw = egret.Tween.get(this._player.character);
        tw.to({ x: this._targetX, y: this._targetY }, 500).call(this._player.idle, this._player);
 
    }
}

class PlayerIdleState extends PlayerState {

    onEnter() {
        this._player.character.gotoAndPlay("idle");
    }
}