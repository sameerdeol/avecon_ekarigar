// import { Component, OnInit } from '@angular/core';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// // import * as XLSX from 'xlsx';
// // import { saveAs } from 'file-saver';

// @Component({
//   selector: 'app-leave-details',
//   templateUrl: './leave-details.page.html',
//   styleUrls: ['./leave-details.page.scss'],
// })
// export class LeaveDetailsPage implements OnInit {

//   constructor() { }

//   ngOnInit() {}

//   // exportTableToExcel() {
//   //   const tableElement = document.getElementById('downloadexcel') as HTMLTableElement;

//   //   if (!tableElement) {
//   //     console.error('Table element not found');
//   //     return;
//   //   }

//   //   // Create a new workbook and add a worksheet
//   //   const workbook = XLSX.utils.book_new();
//   //   const worksheet = XLSX.utils.table_to_sheet(tableElement);

//   //   // Add the worksheet to the workbook
//   //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

//   //   // Convert the workbook to a binary string
//   //   const workbookBinary = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

//   //   // Create a Blob from the binary string
//   //   const blob = new Blob([workbookBinary], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

//   //   // Trigger the download using FileSaver
//   //   const fileName = 'leave-details.xlsx';
//   //   saveAs(blob, fileName);

//   //   console.log('Excel file generated and download triggered:', fileName);
//   // }
//   downloadPDF() {
//     const data = document.getElementById('downloadexcel');
    
//     html2canvas(data!).then(canvas => {
//       // Few necessary setting options
//       const imgWidth = 208;
//       const pageHeight = 295;
//       const imgHeight = canvas.height * imgWidth / canvas.width;
//       const heightLeft = imgHeight;

//       const contentDataURL = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
//       const position = 0;
//       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
//       pdf.save('leave-report.pdf'); // Generated PDF
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.page.html',
  styleUrls: ['./leave-details.page.scss'],
})
export class LeaveDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  downloadPDF() {
    const data = document.getElementById('downloadexcel');

    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208; // Width of the image in the PDF
        const pageHeight = 295; // Height of a page in the PDF
        const imgHeight = canvas.height * imgWidth / canvas.width; // Calculate the height of the image based on the width
        let heightLeft = imgHeight;

        const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF in portrait mode, A4 size
        let position = 0; // Starting position for the image

        // Add the image to the PDF
        pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // If the content is longer than one page, add more pages
        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('leave-report.pdf'); // Save the generated PDF with the given filename
      }).catch(error => {
        console.error('Error generating PDF:', error);
      });
    } else {
      console.error('Could not find the table element!');
    }
  }
}
