var Excel = require('exceljs');
var workbook = new Excel.Workbook();
function readFile(){
workbook.xlsx.readFile('file2.xlsx').then(function(){
  console.log("i think working fine")
  var worksheet = workbook.getWorksheet(1);

worksheet.eachRow(function(row,rowNumber){
  console.log('Row'+rowNumber+"==="+JSON.stringify(row.values))
  console.log(rowNumber)
})
})
}

function writeFile(){

  var worksheet = workbook.addWorksheet('sheet1');

  worksheet.columns =[
    {header:"Id",key:"id",width:10},
    {header:'Type',key:'type',width:15},
    {header:'Assigned Engineer',key:'eng',width:25},
    {header:'Due Date',key:'ddate',width:18},
    {header:'Client Name',key:'cname',width:20},
    {header:'person Name',key:'pname',width:20},
    {header:'enquiry type',key:'etype',width:18},
    {header:'acknowledge',key:'ack',width:20}
  ]

  worksheet.addRow({id:16,type:"Trading1221",eng:"Dhanasekar122",ddate:new Date(),cname:"Ford22",pname:"sekar22",etype:"pipeling2",ack:"Y2"})
  worksheet.addRow({id:71,type:"Trading3221",eng:"Dhanasekar322",ddate:new Date(),cname:"Ford32",pname:"sekar32",etype:"pipeling3",ack:"Y3"})

  workbook.xlsx.writeFile('file4.xlsx').then(function(){

  })
}
writeFile()
function work(){
  console.log(workbook.xlsx.writeFile('file4.xlsx'),then(function(){
    return ;
  }))
}
