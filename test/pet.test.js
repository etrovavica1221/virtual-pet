const Pet = require('../src/pet');

const MAXIMUM_FITNESS = 10;
const FATAL_FITNESS = 0;
const MINIMUM_HUNGER = 0;
const FATAL_HUNGER = 10;
const ALERT_FITNESS = 3;
const ALERT_HUNGER = 5;
const MAXIMUM_AGE = 30;
const MINIMUM_AGE = 0;
const DEATH_ALERT = 'Your pet is no longer alive :(';
const RESCUED_ALERT = `Well done! Snickers finally managed to find ${this.name}. They will remember you for the rest of their life!`;

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Pet);
    expect(new Pet('Snickers')).toBeInstanceOf(Pet);
  });
});

describe('growUp', () => {
  it('increments the age by 1 and the hunger by 5 and decrease the fitness property by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.hunger = FATAL_HUNGER;
    expect(() => pet.feed()).toThrow(DEATH_ALERT);
  });
  it('throws an error if the pet is rescued', () => {
    const pet = new Pet('Fido');
    pet.age = MAXIMUM_AGE;
    expect(() => pet.growUp()).toThrow(RESCUED_ALERT);
  });
});

describe('walk', () => {
  it('increases fitness by 3 to a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.fitness = FATAL_FITNESS;
    expect(() => pet.walk()).toThrow(DEATH_ALERT );
  });
});

describe('feed', () => {
  it('decreases hunger by 3 to a minimum of 0', () => {
    const pet = new Pet('Fido');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(MINIMUM_HUNGER);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.hunger = FATAL_HUNGER;
    expect(() => pet.feed()).toThrow(DEATH_ALERT );
  });
});


describe('checkUp', () => {
  it("return 'I need a walk' when pet's fitness is 3 or less", () => {
    const pet = new Pet('Fido');
    pet.fitness = ALERT_FITNESS;
    expect(pet.checkUp()).toEqual('I need a walk');
  });
  it("return 'I am hungry' when pet's hunger is 5 or more", () => {
    const pet = new Pet('Fido');
    pet.hunger = ALERT_HUNGER ;
    expect(pet.checkUp()).toEqual('I am hungry');
  })
  it("return 'I am hungry AND I need a walk' when pet's hunger is 5 or more and fitness is 3 or less", () => {
    const pet = new Pet('Fido');
    pet.hunger = ALERT_HUNGER ;
    pet.fitness = ALERT_FITNESS;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  })
  it("return 'I feel great!' when neither of the above are true", () => {
    const pet = new Pet('Fido');
    expect(pet.checkUp()).toEqual('I feel great!');
  })
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.hunger = FATAL_HUNGER;
    expect(() => pet.feed()).toThrow(DEATH_ALERT );
  });  
});

describe('isAlive', () => {
  it("returns true if pet is alive", () => {
    const pet = new Pet('Fido');
    pet.hunger = FATAL_HUNGER - 1;
    pet.fitness = FATAL_FITNESS + 1;
    expect(pet.isAlive).toEqual(true);
  })
  it("returns false if pet is dead", () => {
    const pet = new Pet('Fido');
    pet.hunger = FATAL_HUNGER;
    pet.fitness = FATAL_FITNESS;
    expect(pet.isAlive).toEqual(false);
  })
});

describe('adoptChild', () => {
  it('adds child to parents children array property', () => {
    const parent = new Pet('Snickers');
    const child = new Pet('Topa');
    parent.adoptChild(child);
    expect(parent.children.length).toEqual(1);
  })
});

describe('haveBaby', () => {
  it('create child inside parents children array property', () => {
    const parent = new Pet('Dave');
    parent.haveBaby('Amelia');
    expect(parent.children.length).toEqual(1);
  })
});




