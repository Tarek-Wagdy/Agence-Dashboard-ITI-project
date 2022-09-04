import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/Services/model.service';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor( private modelservice:ModelService) { }

  DisplayModels: boolean = false
  models: any = []
  errorMessage: string = ""
  RenderValues() {
      this.modelservice.GetAllModels().subscribe(

      modelData => {
        this.models = modelData;

      },
      error => { this.errorMessage = error }

    )
    this.DisplayModels = true
   
  }
   

  Hidden() {
    this.DisplayModels = false
  }
  ngOnInit(): void {
  }
 
  // RenderValues() {

  //   this.modelservice.GetAllModels().subscribe(

  //     modelData => {
  //       this.models = modelData;

  //     },
  //     error => { this.errorMessage = error }

  //   )
  //   this.DisplayModels = true
  // }

}
