this.Box = function() {
    this.id;
    this.x;
    this.y;
    this.width;
    this.height;
    this.color;
    this.boxOwner;
    
    //constructor
    this.construct = function(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.boxOwner = 0;
    }
    
    //accessors
    this.getX = function() {return this.x;}
    this.getY = function() {return this.y;}
    this.getWidth = function() {return this.width;}
    this.getHeight = function() {return this.height;}
    this.getColor = function() {return this.color;}
    this.getBoxOwner = function() {return this.boxOwner;}
    
    this.setX = function(x) {this.x = x;}
    this.setY = function(y) {this.y = y;}
    this.setWidth = function(width) {this.width = width;}
    this.setHeight = function(height) {this.height = height;}
    this.setColor = function(color) {this.color = color;}
    this.setBoxOwner = function(player) {this.boxOwner = player;}
    
    /**
     * paint()
     * paints the box on screen
     */
    this.paint = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width-1, this.height-1);
    }
    
    /**
     * @name toggleColor()
     * @description changes box color depending of the given box owner 
     * @param {int} boxOwner : the owner of the box
     */
    this.toggleBox = function(boxOwner) {
        this.boxOwner = boxOwner;
        switch (this.boxOwner) {
            case 1:
                this.color = "yellow";
                break;
            case 2:
                this.color = "red";
                break;
            default:
                this.color = "silver";
                break;
        }
        this.paint();
    }
    
    /**
     * @name isFree()
     * @description checks if the box is free or not
     * @returns {Boolean}:  true if the box don't have owner
     *                      false if yes
     */
    this.isFree = function() {
        return this.boxOwner == 0;
    }
}


