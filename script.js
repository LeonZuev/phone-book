const phoneBook = {
  contactsList: [], // массив контактов, каждый контакт - объект
  addContact(contact) {
      if (contact.userName) {
          this.contactsList.push(contact);
          alert("Contact added");
      }
      this.updateContactList();
  },
  changeContact(updatedContact) {
      const selectedContactName =
          document.getElementById("changeContactName").value;

      const index = this.contactsList.findIndex(
          (contact) => contact.userName === selectedContactName
      );
      this.contactsList[index] = updatedContact;
      this.updateContactList();
  },
  updateContactList() {
    const contactsList = document.getElementById('contactsList');

    this.contactsList.forEach(contact => {
      
      const li = document.createElement('li');
      li.innerHTML = `
      <strong>Name: </strong> ${contact.userName}
      <strong>Email: </strong> ${contact.email}
      <strong>PhoneNumber: </strong> ${contact.phoneNumber}
      <strong>Company: </strong> ${contact.company}
      <strong>Address: </strong> ${contact.address}
      `;
      contactsList.append(li);
    });
  }
  
}
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactPhone = document.getElementById("contactPhone");
const contactCompany = document.getElementById("contactCompany");
const contactAddress = document.getElementById("contactAddress");

const addContactForm = document.getElementById("addContactForm");
addContactForm.addEventListener("submit", addContactHandler);

function addContactHandler(event) {
  event.preventDefault(); // Метод отменяет дефолтное поведение тэга

  const contactNameValue = contactName.value.trim();
  const contactEmailValue = contactEmail.value.trim();
  const contactPhoneValue = contactPhone.value.trim();
  const contactCompanyValue = contactCompany.value.trim();
  const contactAddressValue = contactAddress.value.trim();

  const newContact = {
      userName: contactNameValue,
      email: contactEmailValue,
      phoneNumber: contactPhoneValue,
      company: contactCompanyValue,
      address: contactAddressValue
  }

  phoneBook.addContact(newContact);
  addContactForm.reset();
}
