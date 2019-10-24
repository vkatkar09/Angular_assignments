import {Component} from '@angular/core';

@Component({
    selector : 'app-heart',
    template : `
    
    <span class="fa fa-3x"
    (click)="HeartLike()"
    [ngClass]="{
        'fa-heart' : activeHeart,
        'fa-heart-o' : !activeHeart
    }"
    ></span>
    `,

    styles : [``]
    
})

export class HeartComponent{
  
    public activeHeart : boolean = false;
    constructor(){}

    HeartLike(){
        this.activeHeart = !this.activeHeart; 
    }
}