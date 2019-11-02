import {Component} from '@angular/core';

@Component({

        selector : 'app-gender',
        template : `
        <div class="container">
        <div class="row">
            <div class="col-md-6">
                <button type="button" class="btn btn-danger btn-md"
                [disabled]="gender==male"
                (click) = "gender=male" >Male</button>

                <button type="button" class="btn btn-info btn-md"
                [disabled]="gender==female"
                (click) = "gender=female" >Female</button>
            </div>
        </div>
        <div *ngIf="gender">
            <img src="{{gender.imgUrl}}">
            <h3>{{gender.name}}</h3>
        </div>

  
    </div>


     
        `,
        styles : [``]

})

export class GenderComponent{
  
    public ilike:boolean=false;
    public gender : any;
    public male ={
        imgUrl : '../assets/img/face2.jpg',
        name : 'John'
    }
    public female ={
        imgUrl : '../assets/img/face1.jpg',
        name : 'Kim'
    }
    constructor(){}

    Action(){
        this.ilike = !this.ilike;
    }
}