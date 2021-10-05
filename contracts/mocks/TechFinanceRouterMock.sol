// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@techfinance/core/contracts/UniswapV2Router02.sol";

contract TechFinanceRouterMock is UniswapV2Router02 {
    constructor(address _factory, address _WETH) public UniswapV2Factory(address _factory, address _WETH) {}
}
