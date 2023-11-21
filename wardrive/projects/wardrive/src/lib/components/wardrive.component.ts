import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-wardrive',
    templateUrl: './wardrive.component.html',
    styleUrls: ['./wardrive.component.css']
})
export class wardriveComponent implements OnInit {
    constructor(private API: ApiService) { }

    ngOnInit() {
    }
}
