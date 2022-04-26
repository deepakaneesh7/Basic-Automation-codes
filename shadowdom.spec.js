describe('Shadow DOM', async () => {
  beforeEach(async () => {
    await browser.url('https://the-internet.herokuapp.com/shadowdom')
  });
  
  it('getting text from first line',async () => {
    const getText= $("#content").shadow$('my-paragraph:nth-child(4) > span') 
    console.log( getText.getText());
  });

  it('gettting text from second line',async () => {
    const getText= await $("#content").shadow$('my-paragraph:nth-child(5) > ul > li:nth-child(1)') 
    console.log(await getText.getText());    
  });

  it('getting text from third line',async () => {
    const getText= await $("#content").shadow$('my-paragraph:nth-child(5) > ul > li:nth-child(2)') 
    console.log(await getText.getText());    
  });

});