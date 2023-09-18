const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted)
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzzz...`); // need "this" b/c it's calling the object from inside the method
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      };
    },
  }
  return pet;
};
// --------- NEW PET ENTRIES: ---------
const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");
// console.log(sora, clover, baxter, cleo, francine); // verify values changed

clover.isTired = 8;
francine.isTired = 8;
// console.log(clover, francine); // verify values changed

// Create array of pet objects:
const allPets = [sora, clover, baxter, cleo, francine];
// console.log(allPets); // verify array

// Function to display pets in browser:
const showPets = function (petArray) { // petArray argument is placeholder for allPets array
  // variable for empty list (so list clears and updates with fresh info each time showPets is run)
  pets.innerHTML = "";

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) { // pet (from for..of loop) is needed in front of the status property to specify where it's coming from
      status = "sleeping";
    }
    let li = document.createElement("li"); // solution uses const instead of let...not sure what issues (if any) this could cause...
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.` // need pet in front of name/species property, use innerHTML b/c <span>
    pets.append(li); // need to point where li is being appended (ie. pets.append(li))
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});