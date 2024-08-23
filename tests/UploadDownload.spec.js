const ExcelJs =require('exceljs');
const {test,expect} = require("@playwright/test");
 
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

test("upload download test", async({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download');
    await page.locator("#downloadButton").click();
    downloadPromise.then(async() => {
        console.log('Download completed');
        writeExcelTest("Banana",999,{row:0,colChange:2},"C:/Users/916120/Downloads/download.xlsx");
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("C:/Users/916120/Downloads/download.xlsx");
        });
        
    // await downloadPromise;
    
    

})

