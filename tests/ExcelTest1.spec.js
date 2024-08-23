const ExcelJs =require('exceljs');
const { test, expect } = require('@playwright/test');
 
async function writeExcelTest(searchText,replaceText,change,filePath)
{
    
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output= await readExcel(worksheet,searchText);
 
  const cell = worksheet.getCell(output.row,output.column+change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
 
}
 
 
async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;
}
//update Mango Price to 350. 
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
test('Upload download excel validation',async ({page})=>
{
  const textSearch = 'Mango';
  const updateValue = '000';
  const downloadsPath = 'C:/Users/916120/Downloads/';
  await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
  // const downloadPromise = page.waitForEvent('download');
  // await page.getByRole('button',{name:'Download'}).click();
  // const download = await downloadPromise;
  // await download.saveAs(`${downloadsPath}download.xlsx`);

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button',{name:'Download'}).click();
  const download = await downloadPromise;

  await download.saveAs('C:/Users/916120/Downloads/' + download.xlsx);

  writeExcelTest(textSearch,updateValue,{rowChange:0,colChange:2},"C:/Users/916120/Downloads/download.xlsx");


  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator("#fileinput").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles("C:/Users/916120/Downloads/download.xlsx");


  const textlocator = page.getByText(textSearch);
  const desiredRow = await page.getByRole('row').filter({has :textlocator });
  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
 
})
 
 