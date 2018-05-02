var  Excel = require('exceljs');
var workbook = new Excel.Workbook();

function writeFile1(){
  var row=[]
  var worksheet = workbook.getWorksheet('sheet1');

  workbook.xlsx.readFile('file2.xlsx').then(function(){
    console.log("i think working fine")

  worksheet.eachRow(function(row,rowNumber){
row.push(JSON.stringify(row.values))

  })
  })
  var worksheet1 = workbook.addWorksheet('sheet1');

    worksheet1.columns =[
      {header:"Id",key:"id",width:10},
      {header:'Type',key:'type',width:15},
      {header:'Assigned Engineer',key:'eng',width:25},
      {header:'Due Date',key:'ddate',width:18},
      {header:'Client Name',key:'cname',width:20},
      {header:'person Name',key:'pname',width:20},
      {header:'enquiry type',key:'etype',width:18},
      {header:'acknowledge',key:'ack',width:20}
    ]
row.push({id:16,type:"Tr1adi5n221",eng:"Dha1nasekar122",ddate:new Date(),cname:"Ford22",pname:"sekar22",etype:"pipeling2",ack:"Y2"})
row.push({id:21,type:"T1rad2in221",eng:"Dhan2asekar322",ddate:new Date(),cname:"Ford32",pname:"sekar32",etype:"pipeling3",ack:"Y3"})
console.log(row)
worksheet1.addRows(row)
workbook.xlsx.writeFile('file2.xlsx').then(function(){

})
}
readfunt()
function readfunt(){
  var row11 =[]

  workbook.xlsx.readFile('file2.xlsx').then(function(){
    console.log("i think working fine")
    var worksheet = workbook.getWorksheet('sheet1');
    worksheet.eachRow(function(row,rowNumber){

  console.log(row.values)

  })
  })
  console.log(row11)
  return row11;
}
