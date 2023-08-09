
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



console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);


console.log(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);




let choice = Number(prompt("make a choice with the options \n 1-showing the first contact (first) \n 2-showing the last contact (last)\n 3-adding a new contact (new) "));


switch (choice) {
    case 1:
        alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        break;
    case 2:
        alert(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);
        break;
    case 3:
        newContact.name = window.prompt("name: ");
        newContact.phone = window.prompt("phone: ");
        newContact.email = window.prompt("email: ");

        if ((String(newContact.name).length > 0 && newContact.name != null) && (String(newContact.phone).length > 0 && newContact.name != null) && (String(newContact.email).length > 0) && newContact.name != null) {
            contacts.push(newContact);
            alert(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);
        };

        break;
    default:
        console.log("invalid!")
        break;
}