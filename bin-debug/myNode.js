var myNode = (function () {
    function myNode(data) {
        this.walkable = true;
        this.costMultiplier = 1.0;
        this.x = data.x;
        this.y = data.y;
        this.walkable = data.walkable;
    }
    var d = __define,c=myNode,p=c.prototype;
    return myNode;
}());
egret.registerClass(myNode,'myNode');
