const Park = function(name, ticketPrice, collectionOfDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const a = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(a, 1);
};

Park.prototype.mostVisitedDino = function(){
  const a = [];
  const b = [];
  for (dino of this.collectionOfDinosaurs){
    a.push(dino)
    for (dino of a){
      b.push(dino.guestsAttractedPerDay)
    };
  };
  const x = Math.max.apply(null, b);
  for (dino of this.collectionOfDinosaurs){
    if (dino.guestsAttractedPerDay === x)
    return `The dinosaur that attracts the most visitors is the ${dino.species}.`
  };
};


module.exports = Park;
