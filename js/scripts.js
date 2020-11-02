

// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

let addressBook = new AddressBook();

$(document).ready(function() {
  $("#contactInfo").submit(function(e) {
    e.preventDefault();
    
    
    let firstName = $("input#firstName").val();
    let lastName = $("input#lastName").val();
    let phoneNumber = $("input#phoneNumber").val();
    let contact1 = new Contact(firstName, lastName, phoneNumber);
    addressBook.addContact(contact1)
    console.log(addressBook);

    // function displayContacts () {
      $("#contactList").html("");
      let htmlForContactInfo = "";
      addressBook.contacts.forEach(function(contact) {
        htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
      });
      $("#contactList").html(htmlForContactInfo);
    // };

    function removeContact(){
      $("li").click(function() {
        console.log(this.id);
        addressBook.deleteContact(this.id);
        let htmlForContactInfo = "";
        addressBook.contacts.forEach(function(contact) {
          htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
        });
        $("#contactList").html(htmlForContactInfo);
      });
      removeContact();
    }
    removeContact();

  }); 

});


// 1. click the contact
// 2. find that contact
// 3. then delete that contact
// addressBook.d