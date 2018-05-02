var Excel = require('exceljs');

// create workbook & add worksheet
var workbook = new Excel.Workbook();
var worksheet = workbook.addWorksheet('Discography');

// add column headers
worksheet.columns = [
    { header: 'Album', key: 'album'},
    { header: 'Year', key: 'year'}
];

// add row using keys
worksheet.addRow({album: "Taylor Swift", year: 2006});

// add rows the dumb way
worksheet.addRow(["Fearless", 2008]);

// add an array of rows
var rows = [
  ["Speak Now", 2010],
  {album: "Red", year: 2012}
];
worksheet.addRows(rows);

// edit cells directly
worksheet.getCell('A6').value = "1989";
worksheet.getCell('B6').value = 2014;

// save workbook to disk
workbook.xlsx.writeFile('file1.xlsx').then(function() {
  console.log("saved");
});
