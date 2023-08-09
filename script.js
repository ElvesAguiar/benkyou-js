
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
let isOver=true;
while (isOver) {


    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);


    console.log(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);




    let choice = prompt("Chose an option\n display the first contact (first) \n display the last contact (last) \n display all contacts (all) \n add a new contact (new) \n exit the program (quit)");


    switch (choice) {
        case "first":
            alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            break;
        case "last":
            alert(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);
            break;
        case "new":
            newContact.name = window.prompt("name: ");
            newContact.phone = window.prompt("phone: ");
            newContact.email = window.prompt("email: ");

            if ((String(newContact.name).length > 0 && newContact.name != null) && (String(newContact.phone).length > 0 && newContact.name != null) && (String(newContact.email).length > 0) && newContact.name != null) {
                contacts.push(newContact);
                alert(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);
            };
            break;
        case "quit":
            isOver=false;
            break;
        case "all":
            let text;
            for(contact of contacts){
                text+=`${contact.name} / ${contact.phone} / ${contact.email}\n`
            }
            alert(text);
        default:
            console.log("invalid!")
            break;
    }
}