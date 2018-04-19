this.Chip = function(){
	
	this.id;
    this.x;
    this.y;
    this.r;
    this.color;
    this.chipOwner;
    this.borderWidth;
    this.borderColor;
    
    //constructor
    this.construct = function(x, y, r, chipOwner) {
        this.x = x;
        this.y = y;
        this.r=r;
        this.chipOwner = chipOwner;

        this.borderWidth=5;
        this.borderColor="black";
        this.toggleChip(chipOwner);
    }
    
    //accessors
    this.getX = function() {return this.x;}
    this.getY = function() {return this.y;}
    this.getR = function() {return this.r;}
    this.getColor = function() {return this.color;}
    this.getChipOwner = function() {return this.chipOwner;}
    
    this.setX = function(x) {this.x = x;}
    this.setY = function(y) {this.y = y;}
    this.setR = function(y) {this.r = r;}
    this.setColor = function(color) {this.color = color;}
    this.setChipOwner = function(player) {this.chipOwner = player;}
    
    /**
     * paint()
     * paints the box on screen
     */
    this.paint = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0, 2 * Math.PI);
        ctx.fillStyle=this.color;
        ctx.fill();
        ctx.lineWidth=this.borderWidth;
        ctx.strokeStyle=this.borderColor;
        ctx.stroke();

        
        /*ctx.beginPath();
                    ctx.arc(j*boxHeight+(boxHeight/2), i*boxWidth+(boxWidth/2), (boxWidth/2.7)-5, 0, 2 * Math.PI);
                    ctx.fillStyle="green";
                    ctx.fill();
                    ctx.lineWidth=5;
                    ctx.strokeStyle="#003300";
                    ctx.stroke();*/
                    
        

    }
    
    /**
     * @name toggleColor()
     * @description changes box color depending of the given box owner 
     * @param {int} chipOwner : the owner of the box
     */
    this.toggleChip = function(chipOwner) {
        this.chipOwner = chipOwner;
        switch (this.chipOwner) {
            case 1:
                this.color = "green";
                break;
            case 2:
                this.color = "yellow";
                break;
            default:
                this.color = "silver";
                break;
        }
    }
    
    /**
     * @name isFree()
     * @description checks if the box is free or not
     * @returns {Boolean}:  true if the box don't have owner
     *                      false if yes
     */
    this.isFree = function() {
        return this.chipOwner == 0;
    }		
}



