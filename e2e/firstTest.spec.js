describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should have a button on welcome screen', async () => {
    await expect(element(by.id('button'))).toBeVisible();
  });

  it('should show incremented number after tap', async () => {
    await element(by.id('button')).tap();
    await expect(element(by.text("2"))).toBeVisible();
  });
})