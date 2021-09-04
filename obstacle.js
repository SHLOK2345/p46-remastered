class Obstacle{

    constructor(){
    var y=random([50,100,150,200,250])

    var rand=random([175,325,375])


    this.body=createSprite(width,y,50,200)
    this.image1=loadImage("pipeNorth.png")
    this.body.addImage(this.image1)
    this.body.velocityX=-5
    this.body.lifetime=300

    this.body2=createSprite(width,y+600,50,200)
    this.image2=loadImage("pipeSouth.png")
    this.body2.addImage(this.image2)
    this.body2.velocityX=-5
    this.body2.lifetime=300

    this.body3=createSprite(width,rand,50,200)
    this.image3=loadImage("cloud.png")
    this.body3.addImage(this.image3)
    this.body3.velocityX=-5
    this.body3.lifetime=300
    this.body3.scale=0.2
    }

    display(){
        imageMode(CENTER)
        image(this.image1,this.body.position.x,this.body.position.y,50,200)
        image(this.image2,this.body2.position.x,this.body2.position.y,50,200)


    }
}