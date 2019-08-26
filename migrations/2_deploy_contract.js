const ParamToken = artifacts.require("ParamToken");

module.exports = function(deployer) {
  deployer.deploy(ParamToken);
};
