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
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
}
contacts.push(newContact);

console.log(`name: ${contacts[0].name} 
phone: ${contacts[0].phone} 
email: ${contacts[0].email}`);


console.log(`name: ${contacts[contacts.length-1].name} 
phone: ${contacts[contacts.length-1].phone} 
email: ${contacts[contacts.length-1].email}`);

