

function Airport(capacity = DEFAULT_CAPACITY) {
  this.planes = [];
  this.capacity = capacity;
}

const DEFAULT_CAPACITY = 20;

  Airport.prototype.allowLanding = function(plane){
    if (this._stormy() === true) {
      throw new Error("Cannot land in a storm")
    }
    else if (this._full() >= true) {
      throw new Error("Cannot land airport full")
    }
    else {
      this.planes.push(plane);
    };
  };
  Airport.prototype.allowTakeOff = function(plane){
    if (this._stormy() === true) {
      throw new Error("Cannot take off in a storm")
    }
    else {
      index = this.planes.indexOf(plane);
      this.planes.splice(index, 1);
    };

  };

  Airport.prototype._full = function(){
    return (this.planes.length === DEFAULT_CAPACITY);
  };

  Airport.prototype._stormy = function(){
    return (Math.random(11) <= 4);
  };
