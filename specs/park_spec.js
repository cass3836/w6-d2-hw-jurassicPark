const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dinosaur;
let dinosaur2;
let dinosaur3;
let dinosaur4;

  beforeEach(function() {
    park = new Park('Jurassic Park', 10, []);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'omnivore', 130);
    dinosaur3 = new Dinosaur('cassiasaurus', 'herbivore', 5);
    dinosaur4 = new Dinosaur('cassiasaurus', 'herbivore', 7);
  });


  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur3];
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const expected = 'The dinosaur that attracts the most visitors is the velociraptor.';
    const actual = park.mostVisitedDino();
    assert.deepStrictEqual(actual, expected);
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
