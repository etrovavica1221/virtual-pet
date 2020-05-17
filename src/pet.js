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

function Pet(name) {
  this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;    
};
          
Pet.prototype = {
  get isAlive() {
    return this.hunger < FATAL_HUNGER  && this.fitness > FATAL_FITNESS;
   }
};

Pet.prototype.growUp = function() {
  if (this.age === MAXIMUM_AGE) {
    throw new Error(RESCUED_ALERT );
  } else if (!this.isAlive) {
    throw new Error(DEATH_ALERT);
  }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ALERT);
  }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS ;
    }
};

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ALERT);
  }
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
      this.hunger -= 3;
    } else {
      this.hunger = MINIMUM_HUNGER;
    }
  
};

Pet.prototype.checkUp = function() {
  if (this.fitness <= ALERT_FITNESS && this.hunger >= ALERT_HUNGER) {
    return 'I am hungry AND I need a walk';
  } else if (this.fitness <= ALERT_FITNESS) {
    return 'I need a walk';
  } else if (this.hunger >= ALERT_HUNGER) {
    return 'I am hungry';
  } else {
    return 'I feel great!';
  }
};

module.exports = Pet;