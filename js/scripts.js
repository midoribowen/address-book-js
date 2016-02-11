function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function (firstName, lastName) {
  return this.firstName + " " + this.lastName;
};
