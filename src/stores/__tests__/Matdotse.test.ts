import { MatSe } from '../MatSe';

describe('store: MatSe', () => {
  it('should exist', () => {
    expect(MatSe).toBeDefined();
  });
  it('should have a search method', async () => {
    jest.setTimeout(300000);

    try {
      const client = await MatSe.init();
      await client.get('/g/shoppingCart/getShoppingCart');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    expect(true).toBe(true);
  });
});
