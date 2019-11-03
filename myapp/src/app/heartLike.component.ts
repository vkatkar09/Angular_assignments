import {Component, Input} from '@angular/core';

@Component({

    selector : 'app-heartLike',
    template : `
    <div class="container">
        <div class="row">
         <div class="col-md-8">
             <i class="fa fa-2x"
             [class.fa-heart] = "ilike"
             [class.fa-heart-o] = "!ilike"
             (click) = "Like()"
             [style.color] = "ilike ? 'red' : '' "
             ></i> {{count}}
         </div>
        </div>
    </div>
    
    `

})

export class HeartLikeComponent{
    public ilike : boolean = false;
    @Input() public count : number;
    constructor(){}

    Like(){
        this.ilike = !this.ilike;
        this.count += this.ilike ? 1 : -1;

        // if(this.ilike)
        // this.count = this.count + 1;
        // else
        // this.count = this.count - 1;

    }
}