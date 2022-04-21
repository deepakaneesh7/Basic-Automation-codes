describe('Scroll view',async () => {
  it('Scroll into view ', async () => {
    browser.url('https://classic.crmpro.com/index.html')
    const mouseMove=  await $('//a[contains(text(),"Forgot Password?")]')
    console.log("in view port ", await mouseMove.isDisplayedInViewport())
    await mouseMove.scrollIntoView()
    console.log("in view port ", await mouseMove.isDisplayedInViewport())
    await mouseMove.waitForDisplayed()
    await mouseMove.moveTo()
    mouseMove.click()
  });
});