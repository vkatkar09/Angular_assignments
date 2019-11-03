import {Component} from '@angular/core';

@Component({

    selector : 'app-task',
    template : `
<div class="container">
    <div class="row">
      <div class="col-md-8">
      
         <div class="header" (click)="DropdownAction()">
         <i class="fa pull-right"
         [class.fa-chevron-down]="!dropdown"
         [class.fa-chevron-up]="dropdown"
         ></i>Header
         </div>

         <div class="body" *ngIf="dropdown">Body</div>
      </div>
    </div>
</div>
    `,
    styles : [`
    .header{
        width : 300px;
        height : 45px;
        background-color : red;
       
    }
    .body{
        width : 300px;
        height : 300px;
        background-color : lightgreen;
      
    }

    `]
    
})

export class TaskComponent{
  public dropdown : boolean = false;

  DropdownAction(){
      this.dropdown = !this.dropdown;
  }
}