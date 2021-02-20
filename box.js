class box {
    constructor(x,y,width,height){
    
        var options={
            isStatic:false,
            restitutuion:0.8,
            density:0.1,
            friction:1.0
        }
    
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
       
        
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black")
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
    
    
    
    
    
    
    
    
    }