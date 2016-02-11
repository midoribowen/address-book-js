function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function (firstName, lastName) {
  return this.firstName + " " + this.lastName;
};

$(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var firstNameInput = $("input#new-first-name").val();
    var lastNameInput = $("input#new-last-name").val();
    var newContact = new Contact(firstNameInput, lastNameInput);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h3").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

   });
});
