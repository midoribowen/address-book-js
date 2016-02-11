describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Rita", "Hayworth");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Hayworth");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to a contact", function() {
    var testContact = new Contact("Woodrow", "Wilson");
    expect(testContact.fullName()).to.equal("Woodrow Wilson");
  });
});
