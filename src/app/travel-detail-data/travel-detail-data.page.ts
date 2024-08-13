import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-travel-detail-data',
  templateUrl: './travel-detail-data.page.html',
  styleUrls: ['./travel-detail-data.page.scss'],
})
export class TravelDetailDataPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public generatePDF(): void {
    const data = document.getElementById('downloadid');
  
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
      pdf.save('Table.pdf'); // Generated PDF
      
      // Restore the scrolling after capturing the content
      data!.style.overflow = 'auto';
    });
  }
  
}
