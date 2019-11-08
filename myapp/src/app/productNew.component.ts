import {Component} from '@angular/core';
@Component({
    selector: 'app-productNew',
    templateUrl: './productNew.html'
})

export class ProductNewComponent {

    public contentArea:string;
    public laptopDetails = [
        {
            imgUrl : '../assets/img/1.jpg',
            name : 'Dell',
            price : '35000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Apple',
            price : '100000'

        },   
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'HP',
            price : '30000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Apple',
            price : '100000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Apple',
            price : '100000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Apple',
            price : '100000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Apple',
            price : '100000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Apple',
            price : '100000'

        }
    ];

    public mobileDetails = [
        {
            imgUrl : '../assets/img/1.jpg',
            name : 'Samsung',
            price : '25000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Apple',
            price : '70000'

        },  
         {
            imgUrl : '../assets/img/3.jpg',
            name : 'MI',
            price : '27000'

        },
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'MI',
            price : '27000'

        },
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'MI',
            price : '27000'

        },
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'MI',
            price : '27000'

        },
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'MI',
            price : '27000'

        }
    ];

    public acDetails = [
        {
            imgUrl : '../assets/img/1.jpg',
            name : 'Voltas',
            price : '29000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Samsung',
            price : '27000'

        },   {
            imgUrl : '../assets/img/3.jpg',
            name : 'LG',
            price : '25000'

        },
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'Whirlpool',
            price : '26000'

        },
        {
            imgUrl : '../assets/img/1.jpg',
            name : 'Voltas',
            price : '29000'

        },
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'Whirlpool',
            price : '26000'

        },
        {
            imgUrl : '../assets/img/1.jpg',
            name : 'Voltas',
            price : '29000'

        }

    ];
   
    public tvDetails = [
        {
            imgUrl : '../assets/img/1.jpg',
            name : 'Sony',
            price : '45000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Panasonic',
            price : '40000'

        },   {
            imgUrl : '../assets/img/3.jpg',
            name : 'LG',
            price : '35000'

        },
        {
            imgUrl : '../assets/img/3.jpg',
            name : 'Onida',
            price : '25000'

        },
        {
            imgUrl : '../assets/img/2.jpg',
            name : 'Panasonic',
            price : '40000'

        },   {
            imgUrl : '../assets/img/3.jpg',
            name : 'LG',
            price : '35000'

        }
    ];

    constructor(){}
}