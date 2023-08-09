let ticket = {
    startingStation: "Bacanga",
    enStation: "rosario",
    price: 37.0
};

console.log(ticket);

let person = {};
person.name = "maria";
person.surname = "Green";

console.log(person);
/*
let books = [];
books[0] = {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    numberOfPages: 460
};

books[2] = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    numberOfPages: 352
};

books[1] = {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    numberOfPages: 352
};
*/


let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        numberOfPages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliot",
        numberOfPages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        numberOfPages: 352
    }

];

console.log(books)

books.push(
    {
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        numberOfPages: 254
    }
);



console.log(books);

let lastTwoBooks = books.slice(-2);
console.log(lastTwoBooks);

books.shift()

console.log(`length: ${books.length}`);
for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
};
let sum = 0;

for (let i = 0; i < books.length; i++) {
    sum += books[i].numberOfPages;
};

console.log(sum);

//------------------ LAB --------------------------------------------------------//
let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let newContact = {
}

newContact.name = window.prompt("name: ");
newContact.phone = window.prompt("phone: ");
newContact.email = window.prompt("email: ");
contacts.push(newContact);

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);


console.log(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);

alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
alert(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);