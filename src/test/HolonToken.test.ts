import { HolonToken } from "../class/HolonToken";
import { injectProvider, Web3Provider } from "../class/Web3Provider";
import config from "../config/config.json";

//Test InitializeExistigToken

const holonToken = new HolonToken(injectProvider);

test('HolonToken is initialized with a Provider', async () => {
    await holonToken.initializeExistingToken(config.holonToken);
    let currentProvider = await holonToken.getProvider();
    expect(currentProvider).toHaveProperty("eth");
});

test('HolonToken returns address', async () =>  {
    await holonToken.initializeExistingToken(config.holonToken);
    let holonTokenAddress = await holonToken.getAddress();
    expect(holonTokenAddress).toBeDefined();
});

test('HolonToken has name', async () =>  {
    await holonToken.initializeExistingToken(config.holonToken);
    let holonTokenAddress = await holonToken.getTokenName();
    expect(holonTokenAddress).toBeDefined;
});

test('HolonToken has symbol', async () =>  {
    await holonToken.initializeExistingToken(config.holonToken);
    let holonTokenSymbol = await holonToken.getTokenSymbol();
    expect(holonTokenSymbol).toBeDefined;
});

test('HolonToken has cap', async () =>  {
    await holonToken.initializeExistingToken(config.holonToken);
    let holonTokenCap = await holonToken.getTokenCap();
    expect(holonTokenCap).toBeGreaterThanOrEqual(0);
});

test('HolonToken has Total Supply', async () =>  {
    await holonToken.initializeExistingToken(config.holonToken);
    let totalTokenSupply = await holonToken.getTokenTotalSupply();
    expect(totalTokenSupply).toBeGreaterThanOrEqual(0);
});

test('HolonToken has an owner', async () =>  {
    await holonToken.initializeExistingToken(config.holonToken);
    let owner = await holonToken.getOwner();
    expect(owner).toBeDefined();
});

test('HolonToken can get balances', async () =>  {
    await holonToken.initializeExistingToken(config.holonToken);
    let senderBalance = await holonToken.getBalanceOf(config.sender);
    expect(senderBalance).toBeGreaterThanOrEqual(0);
});
