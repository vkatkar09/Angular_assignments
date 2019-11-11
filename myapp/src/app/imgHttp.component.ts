import {Component} from '@angular/core';

@Component({
    selector : 'app-imgHttp',
    template : `

    <img src="{{imgUrl | imgHttp : 'http://lorempixel.com/400/200' : true}}">
    `
})

export class ImgHttp{
    public imgUrl : string = '';
}