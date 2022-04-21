describe('Browser Window',async () => {
  beforeEach(async()=>{
    await browser.url('https://demoqa.com/browser-windows')
  })

  it('Validate New Tab',async () => {
    const newTab= await $('//button[@id="tabButton"]')
    await newTab.click()
    await browser.switchWindow('sample')   
    await browser.pause(3000)
    browser.closeWindow()    
    await browser.pause(2000)
    await browser.switchWindow('browser-windows')
  });
  it('Validate New Window',async () => {
    const newWindow= await $('//button[@id="windowButton"]')
    await newWindow.click()
    await browser.switchWindow('sample')
    await browser.pause(3000)
    browser.closeWindow()    
    await browser.pause(2000)
    await browser.switchWindow('browser-windows')
  });
  it('Validate New Window Message',async ()=>{
    const newWindowMessage= await $('//button[@id="messageWindowButton"]')
    await newWindowMessage.click()
    const handles= await browser.getWindowHandles()
    await browser.switchToWindow(handles[1])
    await browser.pause(3000)
    await browser.closeWindow()
    await browser.switchToWindow(handles[0])
    await browser.pause(2000)
    browser.closeWindow()
  })
});