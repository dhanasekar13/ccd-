var Excel = require('exceljs')
var workbook = new Excel.Workbook()
var arr=[]
workbook.xlsx.readFile('./file4.xlsx')
    .then(function(){
      var worksheet = workbook.getWorksheet(1)
    var row =[
  [   55,
      "trading",
    "sekar",
      new Date(2017-02-12),
      "ashok leyaland",
      "arun",
      "modeling",
      "Y"],
      [99,"training",new Date(2018-02-13),"tata motors","dhana","reference name","wheldding","Y"]
      ]


        worksheet.addRows(row)
  return       workbook.xlsx.writeFile('./file4.xlsx')
    })
