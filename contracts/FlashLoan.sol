// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Flashloan {

    function executeFlashloan() external {}

    function _flashLoanCallBack() internal {}

    function routeLoop() internal {}

    function hopLoop() internal {}

    function pickProtocol() internal returns (uint256 amountOut) {}

    function uniswapV3() internal returns (uint256 amountOut) {}

    function uniswapV2() internal returns (uint256 amountOut) {}

    function dodoV2Swap() internal returns (uint256 amountOut) {}

    function approveToken() internal {}

}

