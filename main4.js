var Excel = require('exceljs')
var workbook = new Excel.Workbook()
var arr=[]
workbook.xlsx.readFile('./file3.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet(1)
      worksheet.eachRow(function(row,rowNumber){
          arr.push(row.values)
      })
      console.log(worksheet.rowCount)
      var row =[
        [21,"trading","ds",new Date(2012-02-12),"wheels india","danas12","pipeling21","N"]
      ]
      worksheet.addRows(arr)
      worksheet.addRow(row)
  return       workbook.xlsx.writeFile('./file3.xlsx')
    })
