import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Iuser } from './shared/model/user';

@Component({

    selector: 'app-currentUser',
    template: `
    <div class="container">
        <div class="row">
         <div class="col-md-12">

         <table class="table table-bordered">
         <thead>
             <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Email ID</th>
             </tr>
         </thead>
         <tbody>
             <tr *ngFor="let record of records">
                 <td>{{record.id}}</td>
                 <td>{{record.name}}</td>
                 <td>{{record.emailId}}</td>
             </tr>
         </tbody>
     </table>
    </div>
  </div>

    <div class="form-group">
         <input type="text"
         class="form-control" placeholder="Enter ID" #id>
    </div>
    <div class="form-group">
         <input type="text"
         class="form-control" placeholder="Enter your name" #name>
    </div>
    <div class="form-group">
         <input type="text"
         class="form-control" placeholder="Enter Email ID" #email>
    </div>

    <button type="button" class="btn btn-danger" (click)="AddUser(id.value, name.value, email.value)">
    Add User</button>
</div>
    
    `

})

export class CurrentUserComponent {
    @Input() public records:Iuser[];
    @Output() public newRecord = new EventEmitter<Iuser>();
    constructor(){}

    AddUser(uId, uname, uemail){
        this.newRecord.emit({id:uId, name:uname, emailId:uemail});
    }
}