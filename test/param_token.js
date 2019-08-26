
var ParamToken = artifacts.require("ParamToken");

contract("ParamToken", function(accounts) {

  var param_token;
  beforeEach(async () => {
    param_token = await ParamToken.deployed();
  }); 
  
  it("initializes value correctly", async () => {
    const symbol = await param_token.symbol();
    assert.equal(symbol,"PRM","token symbol should be 'PRM'");

    const name = await param_token.name();
    assert.equal(name,"Param Token","token name should be 'Param Token'");

    const totalSupply = await param_token.totalSupply();
    assert.equal(totalSupply,"100000000","total supply should be '100000000'");

  });

  it("initially assigns total supply to owner", async () => {
    const ownerBalance = await param_token.balanceOf(accounts[0]);
    assert.equal(ownerBalance,"100000000","total supply must be assigned to owner initially");
  });

  it("transfers tokens correctly", async() => {
    let obj = await param_token.transfer(accounts[1],25000);
    console.log(obj);
    assert.equal(success,"true","transfer should return 'true'");
  });

});
