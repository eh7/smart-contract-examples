// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract A {
  function afunction (bool _switch) public returns (string memory) {
    return "this is afunction return value"; 
    // return "this is afunction return value";
  }
}

//interface IA {
//  function afunction () external returns (string memory);
//}

contract B {
  address public aAddress;
  A a;

  constructor(address _aAddress) public {
    aAddress = _aAddress;
    a = A(aAddress);
  }

  function bfunction () public returns (string memory) {
    return a.afunction(false);
    //return "this is bfunction return value";
  }
}
