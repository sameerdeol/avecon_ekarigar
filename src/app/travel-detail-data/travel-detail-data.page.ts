import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-travel-detail-data',
  templateUrl: './travel-detail-data.page.html',
  styleUrls: ['./travel-detail-data.page.scss'],
})
export class TravelDetailDataPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  exportTableToExcelLeave() {
    const tableElement = document.getElementById('downloadexcelleave') as HTMLTableElement;

    if (!tableElement) {
      console.error('Table element not found');
      return;
    }

    // Create a new workbook and add a worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.table_to_sheet(tableElement);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Convert the workbook to a binary string
    const workbookBinary = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Create a Blob from the binary string
    const blob = new Blob([workbookBinary], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Trigger the download using FileSaver
    const fileName = 'travel-details.xlsx';
    saveAs(blob, fileName);

    console.log('Excel file generated and download triggered:', fileName);
  }
  
}
