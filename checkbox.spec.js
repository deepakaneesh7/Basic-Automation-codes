describe('Checkbox and radio button checking', async () => {
  it('Checking checkbox', async () => {
    browser.url("http://the-internet.herokuapp.com/checkboxes")
    const checkboxes= await $('//form[@id="checkboxes"]//input[1]')
    await checkboxes.click()
    console.log(await checkboxes.isSelected());
  });
});
