const elf = {
  name: "Mandy",
  weapon: "Bow",
  attack() {
    return "attack with " + this.weapon;
  },
};

const elf2 = {
  name: "Sandy",
  weapon: "Bow",
  attack() {
    return "attack with " + this.weapon;
  },
};
console.log(elf.attack());

// step 2
// factory functions - factory functions are functions that creates objects for us
function createElf(name, weapon) {
  return {
    name: name,
    weapon: weapon,
    attack() {
      return "attack with " + this.weapon;
    },
  };
}

const peterPan = createElf("peter", "sword");
const santa = createElf("santa", "snow");
