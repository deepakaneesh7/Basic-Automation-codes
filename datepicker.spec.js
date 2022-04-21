const expectChai= require('chai').expect;

describe('Date Picker', async () => {
 beforeEach(async ()=>{
    await browser.url('https://demoqa.com/date-picker')    
  }) 
  
  it('Select Date', async () => {
    const dateField= await $('#datePickerMonthYearInput')
    await dateField.click()
    console.log(await dateField.isClickable());
    const selectMonth= await $('//select[@class="react-datepicker__month-select"]//option[@value="3"]')
    await selectMonth.click()
    console.log(await selectMonth.getText());
    const selectYear= await $('//select[@class="react-datepicker__year-select"]//option[@value="2030"]')
    await selectYear.click()
    const selectDate= await $('//div[contains(@class,"react-datepicker__day react-datepicker__day--022")]')
    await selectDate.click()
  });
  it.skip('Date and Time Picker',async () => {
    await browser.url('https://demoqa.com/date-picker')    
    const selectDateAndTimeField= await $('//input[@id="dateAndTimePickerInput"]')
    await selectDateAndTimeField.click()
    await expect(selectDateAndTimeField).toBeClickable()
    const selectMonthNavigation= await $('//span[@class="react-datepicker__month-read-view--down-arrow"]')
    selectMonthNavigation.click()
    const selectMonth= await $('//div[@class="react-datepicker__month-option"][6]')
    await selectMonth.click()
    const selectYearNavigation= await $('//span[@class="react-datepicker__year-read-view--down-arrow"]')
    await selectYearNavigation.click()
    const selectYearSelector= await $('//a[@class="react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"]') 
    await selectYearSelector.click()
    const selectYear= await $('//div[contains(number(),2028)]')
    await selectYear.click()
    const monthAndYear= await $('//div[@class="react-datepicker__current-month react-datepicker__current-month--hasYearDropdown react-datepicker__current-month--hasMonthDropdown"]')
    await monthAndYear.getText()
    const selectDate= await $('//div[contains(@class,"react-datepicker__day react-datepicker__day--021")]')
    await selectDate.click()
    const selectTime= await $('//ul[@class="react-datepicker__time-list"]//li[60]')
    await selectTime.click()
  });
});