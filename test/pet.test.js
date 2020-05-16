const Pet = require('../src/pet');

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const ALERT_FITNESS = 3;
const ALERT_HUNGER = 5;

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('fido')).toBeInstanceOf(Pet);
  });
});

describe('growUp', () => {
  it('increments the age by 1 and the hunger by 5 and decrease the fitness property by 3', () => {
    const pet = new Pet('fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
  });
});

describe('feed', () => {
  it('decreases hunger by 3 to a minimum of 0', () => {
    const pet = new Pet('fido');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(MINIMUM_HUNGER);
  });
});

describe('checkUp', () => {
  it("return 'I need a walk' when pet's fitness is 3 or less", () => {
    const pet = new Pet('fido');
    pet.fitness = ALERT_FITNESS;
    expect(pet.checkUp()).toEqual('I need a walk');
  });
  it("return 'I am hungry' when pet's hunger is 5 or more", () => {
    const pet = new Pet('fido');
    pet.hunger = ALERT_HUNGER ;
    expect(pet.checkUp()).toEqual('I am hungry');
  })
  it("return 'I am hungry AND I need a walk' when pet's hunger is 5 or more and fitness is 3 or less", () => {
    const pet = new Pet('fido');
    pet.hunger = ALERT_HUNGER ;
    pet.fitness = ALERT_FITNESS;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  })
  it("return 'I feel great!' when neither of the above are true", () => {
    const pet = new Pet('fido');
    expect(pet.checkUp()).toEqual('I feel great!');
  })  
})

