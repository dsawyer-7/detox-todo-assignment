describe('Detox Todo App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should launch the app successfully', async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
  });

  it('should show the welcome text', async () => {
    await expect(element(by.id('welcomeText'))).toBeVisible();
  });

  it('should allow typing in the task input', async () => {
    await element(by.id('taskInput')).typeText('Buy milk');
    await expect(element(by.id('taskInput'))).toHaveText('Buy milk');
  });

  it('should have an add button', async () => {
    await expect(element(by.id('addButton'))).toBeVisible();
  });

  it('should show the task list area', async () => {
    await expect(element(by.id('taskList'))).toBeVisible();
  });
});