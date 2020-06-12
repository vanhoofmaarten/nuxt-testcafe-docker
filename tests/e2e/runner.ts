// eslint-disable-next-line @typescript-eslint/no-var-requires
const createTestCafe = require('testcafe');

(async () => {
  try {
    const testcafe = await createTestCafe();
    const runner = testcafe.createRunner();
    const browser = process.env.TESTCAFE_BROWSER || 'chrome:headless';
    const concurrency = parseInt(process.env.TESTCAFE_CONCURRENCY || '1', 10);

    const failedCount = await runner
      .src(`${__dirname}/**/*.spec.ts`)
      .browsers(browser)
      .concurrency(concurrency)
      .run()
      .catch((error: string) => {
        throw new Error(error);
      });

    if (failedCount > 0)
      throw new Error(`TestCafé failed to run. Failed tests: ${failedCount}`);

    process.exit();
  } catch (error) {
    throw new Error(`TestCafé failed to run. ${error}`);
  }
})();
