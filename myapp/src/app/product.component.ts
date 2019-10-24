import {Component} from '@angular/core';
import {Products} from './products';

@Component({
    selector : 'app-product',
    template : `
    <h1>List of Mobile :</h1>
    <ol>
    <li *ngFor="let product of mobileList">
    {{product}}
    </li>
    </ol>

    <h1>List of Laptop :</h1>
    <ol>
    <li *ngFor="let product of laptopList">
    {{product}}
    </li>
    </ol>
    `,
    styles : [``]
})

export class ProductComponent{
    public mobileList : Array<string>;
    public laptopList : Array<string>;
    constructor(private product : Products){
        this.mobileList= product.getMobileList();
        this.laptopList= product.getLaptopList();
    }
}