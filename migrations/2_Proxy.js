const B = artifacts.require("B");
const A = artifacts.require("A");

module.exports = async function (deployer, network, accounts) {
console.log('xxxxxxxxxxxxxxxx', A);
  const guff = await deployer.deploy(A);
//console.log(a);
  const a = await deployer.deploy(A);
console.log('A', a.address);
  const b = await deployer.deploy(B, a.address);
console.log('B', b.address, a.address);
};
