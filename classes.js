class User {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.age = null;
        this.location = "";
    };

    confrontAge(userTwo) {
        if (this.age > userTwo.age) {
            return this.firstName + " è più grande di " + userTwo.firstName
        } else {
            return userTwo.firstName + " è più grande di " + this.firstName
        }


    }
}


const dipendente = new User;
dipendente.firstName = "Luis";
dipendente.age = 20

const dipendente2 = new User;
dipendente2.firstName = "Mario";
dipendente2.age = 25



console.log(dipendente);

console.log(dipendente2)

console.log(dipendente.confrontAge(dipendente2))




/* pets */


class Pet {
    constructor() {
        this.petName = "";
        this.owner = '';
        this.species = '';
        this.breed = ''
    }

    checkOwner(petTwo) {
        if (this.owner === petTwo.owner) {
            return petTwo.petName + " condivide lo stesso padrone di " + this.petName
        } else {
            return petTwo.petName + " non condivide lo stesso padrone di " + this.petName
        }
    }
}


const pet1 = new Pet;

pet1.petName = "Rollo";
pet1.owner = "Luis";

const pet2 = new Pet;

pet2.petName = "Flaco";
pet2.owner = "Mario";


console.log(pet1.checkOwner(pet2))


const Pets = []


const petForm = document.getElementById('petForm');

petForm.onsubmit = (event) => {
    event.preventDefault();

    const _petName = document.getElementById('petName').value;
    const _owner = document.getElementById('ownerName').value;
    const _species = document.getElementById('species').value;
    const _breed = document.getElementById('breed').value;



    const newCard = document.getElementById('card').innerHTML= `
    <ul>
        <li>${_petName}</li>
        <li>${_owner}</li>
        <li>${_species}</li>
        <li>${_breed}</li>
    </ul>
`



}

