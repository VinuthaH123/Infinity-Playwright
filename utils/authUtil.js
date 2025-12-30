class AuthUtil {
  static async login(page) {
    await page.goto('/login');
    if (!process.env.INF_USER || !process.env.INF_PASS) {
  throw new Error('INF_USER or INF_PASS not set! Check GitHub secrets mapping.');
}


    await page.getByLabel('Email').fill(process.env.INF_USER);
    await page.getByLabel('Password').fill(process.env.INF_PASS);
    await page.getByRole('button', { name: 'Login' }).click();
    if (!process.env.INF_USER || !process.env.INF_PASS) {
  throw new Error('INF_USER or INF_PASS is not defined');
}


    // Wait for dashboard to load (NO TIMEOUTS)
    await page.waitForURL('**/dashboard');
  }
}

module.exports = { AuthUtil };
