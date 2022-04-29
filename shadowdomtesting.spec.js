describe('Shadow Dom', async() => {
  it('Login', async () => {
    browser.url('https://pre-alpha.anywhereworks.com/connect')
    const username= await $('#user-email')
    await username.setValue('mike.john@mailinator.com')
    const password= await $('#user-password')
    await password.setValue('test123123')
    const loginButton= await $('#sign-in')
    await loginButton.click()  
  });

 it('Click on Shadow Element', async () => {
    const connect= await $('//h4[contains(text(),"test collab")]')
    await connect.waitForDisplayed({timeout : 30000})
    await connect.click()
    await browser.pause(2000)
    const contactPerson= await $('//ul[@class="css-1019tpl-MemberItemList"]//li[2]//i')
    await contactPerson.moveTo()
    const nameBanner= await $('//div[@id="6daaaf79-2b77-4f40-b129-fe4eaee1f084"]//h4')
    await nameBanner.waitForDisplayed({timeout : 5000})
    await nameBanner.click()
    await browser.pause(3000)
    const shadowElement= await $('#contact-card').shadow$('span[data-option-id="start_chat"]')
    await shadowElement.waitForDisplayed()
    await shadowElement.click()
    await browser.pause(3000)
  });
});
