const Factory = artifacts.require('mocks/TechfinanceFactoryMock.sol');
const Router = artifacts.require('mocks/TechfinanceRouterMock.sol');
const WETH = artifacts.require('mocks/WETH9Mock.sol');
const GovernanceToken = artifacts.require('GovernanceToken.sol');

module.exports = async function(deployer, _network, adresses) {
	const [admin, _] = addresses;
	
	await deployer.deploy(WETH);
	const weth = await WETH.deployed();
	
	const techFi = await GovernanceToken.new("TechFi", "TFI", web3.utils.toWei('500000000'),  web3.utils.toWei('500000000'), 100, 200);
	
	await deployer.deploy(Factory, admin);
	const factory = await Factory.deployed();
	await factory.createPair(techFi.address, weth.address);
	await deployer.deploy(Router, factory.address, weth.address);
	const router = await Router.deployed();

	await deployer.deploy(
		techFi,
		
	)
};
