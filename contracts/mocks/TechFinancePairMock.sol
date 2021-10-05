// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@techfinance/core/contracts/UniswapV2Pair.sol";

contract TechFinancePairMock is UniswapV2Pair {
    constructor() public UniswapV2Pair() {}
}
