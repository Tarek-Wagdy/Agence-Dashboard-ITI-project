import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor( private reportService:ReportService) { }

  DisplayReports: boolean = false
  
  reports: any = []
  errorMessage: string = ""
  RenderValues() {

    this.reportService.getReports().subscribe(

      reportData => {
        this.reports = reportData;

      },
      error => { this.errorMessage = error }

    )
    this.DisplayReports = true
  }
  ngOnInit(): void {
    this.RenderValues()
  }
  Hidden() {
    this.DisplayReports = false
  }
}
