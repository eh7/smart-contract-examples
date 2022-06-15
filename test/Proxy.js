const A = artifacts.require("A");
const B = artifacts.require("B");
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');


contract('VerifyCode', async (accounts) => {

  let a;
  let b;
  let instance;
  const verifyOwner = '0xd03b9c07703bC73ccd1586E202C9DdF5af45e81C';
  const verifyCode = '0xcafe000000000000000000000000000000000000000000000000000000000000';
  const verifyBytes = web3.utils.asciiToHex('');

  it('does contract A (parent) deploy', async () => {
    a = await A.deployed();
    assert(a.address);
  });

  it('does contract B (child) deploy', async () => {
    b = await B.deployed();
    assert(b.address);
  });

  it('does afunction work contract locally', async () => {
    const out = await a.afunction.call();
    console.log(out);
  });

  it('does bfunction work contract locally', async () => {
    const out = await b.bfunction.call();
    console.log(out);
  });

});
