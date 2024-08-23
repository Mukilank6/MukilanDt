import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('rahulshetty ');
  await page.getByText('rahulshetty academy.com', { exact: true }).click();
  await page.getByRole('link', { name: 'Rahul Shetty Academy:' }).click();
  await page.getByRole('link', { name: 'VIEW ALL COURSES' }).click();
  await page.getByPlaceholder('Find a product').click();
  await page.getByRole('button', { name: 'All' }).nth(1).click();
  await page.getByRole('link', { name: 'Rahul Shetty', exact: true }).first().click();
});