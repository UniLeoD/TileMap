class myNode {
    public  x:number; 
    public  y:number; 
    public  f:number;
    public  g:number; 
    public  h:number; 
    public  walkable:Boolean = true;
    public  parent:myNode; 
    public  costMultiplier:number = 1.0;
    
    constructor (data:{ x:number, y:number,walkable:boolean}) {
         this.x = data.x; 
         this.y = data.y; 
         this.walkable = data.walkable;
        } 
}