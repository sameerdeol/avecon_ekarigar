import { Component, OnInit,ElementRef  } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-month-expense-data',
  templateUrl: './month-expense-data.page.html',
  styleUrls: ['./month-expense-data.page.scss'],
})
export class MonthExpenseDataPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  async downloadPDF() {
    const table = document.getElementById('downloadpdf');
  
    if (table) {
      try {
        // Temporarily hide scrollbar
        table.style.overflow = 'hidden';
  
        // Capture table content as image
        const canvas = await html2canvas(table, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
  
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        // Add image to PDF, splitting into pages if necessary
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        let remainingHeight = canvas.height;
        while (remainingHeight > imgHeight) {
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, pdf.internal.pageSize.getHeight() - remainingHeight, imgWidth, imgHeight);
          remainingHeight -= imgHeight;
        }
  
        // Restore table styling
        table.style.overflow = 'auto';
  
        pdf.save('table.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    }
  }

  }

