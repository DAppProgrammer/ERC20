var TokenSale = artifacts.require("TokenSale");

contract("TokenSale", function(accounts) {
  it("should assert true", function(done) {
    var token_sale = TokenSale.deployed();
    assert.isTrue(true);
    done();
  });
});
