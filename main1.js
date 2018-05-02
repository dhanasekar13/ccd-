var Excel = require('exceljs');
var workbook = new Excel.Workbook();
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

worksheet.addRow({id:3,type:"Trading2",eng:"Dhanasekar2",ddate:new Date(),cname:"Ford2",pname:"sekar2",etype:"pipeling2",ack:"Y2"})
worksheet.addRow({id:4,type:"Trading3",eng:"Dhanasekar3",ddate:new Date(),cname:"Ford3",pname:"sekar3",etype:"pipeling3",ack:"Y3"})

workbook.xlsx.writeFile('file2.xlsx').then(function(){
  console.log("i think working fine")
})
