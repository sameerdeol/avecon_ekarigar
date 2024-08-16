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
 
    public generateExpenseDataPDF(): void {
      const data = document.getElementById('downloadExpenseData');
      if(!data){
        console.log('error');
      }else{
        console.log('comming');
      }
      // Temporarily remove scrolling to capture the entire content
      data!.style.overflow = 'visible';
    
      html2canvas(data!, { scrollX: 0, scrollY: -window.scrollY, width: data!.scrollWidth }).then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
    
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
        let position = 0;
        
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('expenseData.pdf'); // Generated PDF
        
        // Restore the scrolling after capturing the content
        data!.style.overflow = 'auto';
      });
    }
    
  }
  

  

