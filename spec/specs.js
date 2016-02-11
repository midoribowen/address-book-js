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

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });
});
