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
  const a = []
  for (dino in this.collectionOfDinosaurs){
    a.push(dino)
  };
  const x = Math.max.apply(null, a);
};


module.exports = Park;
