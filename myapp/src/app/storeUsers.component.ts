import {Component} from '@angular/core';
import {Iuser} from './shared/model/user';

@Component({

    selector : 'app-storeUsers',
    template : `
    <div class="container">
        <div class="row">
         <div class="col-md-8">
            <app-currentUser [records]="userData" (newRecord)="AddNewUser($event)"></app-currentUser>    
         </div>
        </div>
    </div>
    
    `

})

export class StoreUserComponent{
public userData : Iuser[] = [{
    id : 1,
    name : 'Varsha',
    emailId : 'vk@gmail.com'
},
{
    id : 2,
    name : 'Ashvini',
    emailId : 'ak@gmail.com'
},
{
    id : 3,
    name : 'Chandu',
    emailId : 'cd@gmail.com'
}]

constructor(){}

AddNewUser(newUser : Iuser){
    // newUser.id=this.userData.length+1;
    this.userData.push(newUser);
 }

}