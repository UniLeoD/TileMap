var myNode = (function () {
    function myNode(x, y) {
        this.walkable = true;
        this.costMultiplier = 1.0;
        this.x = x;
        this.y = y;
    }
    var d = __define,c=myNode,p=c.prototype;
    return myNode;
}());
egret.registerClass(myNode,'myNode');
