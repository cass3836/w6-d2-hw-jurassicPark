const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dinosaur;

  beforeEach(function() {
    park = new Park('Jurassic Park', 10, []);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'omnivore', 130);
    dinosaur3 = new Dinosaur('cassiasaurus', 'herbivore', 5);
    dinosaur4 = new Dinosaur('cassiasaurus', 'herbivore', 7);
  });


  it('should have a name', function(){
    const actual = park.name;
    assert.deepStrictEqual = (actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.deepStrictEqual = (actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual = (actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual = (actual, ['t-rex']);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    const expected = ['cassiasaurus'];
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual = (actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const expected = 'The dinosaur that attracts the most visitors is dinosaur2.';
    const actual = park.mostVisitedDino();
    assert.deepStrictEqual = (actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
