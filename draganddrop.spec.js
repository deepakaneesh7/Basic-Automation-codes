describe('Drag and Drop Suite',async () => {
  it('drag and drop - simple',async () => {
    browser.url('https://demoqa.com/droppable')
    const sourceElement= await $('//div[@id="draggable"]')
    const targetElement= await $('//div[@id="droppable"]')
    sourceElement.dragAndDrop(targetElement)
  });
});