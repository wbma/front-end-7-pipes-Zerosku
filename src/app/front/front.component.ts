import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  printThis: string;
  mediaArray: any;

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
        this.router.navigate(['login']);
            }

      this.printThis = this.mediaService.test;
      this.mediaService.getNewFiles().subscribe(data => {
        console.log(data);
        this.mediaArray = data;

        this.mediaArray.map(media => {
          const temp = media.filename.split('.');
          const thumbName = temp[0] + '-tn320.png';
          media.thumbnail = thumbName;
        });

        console.log(data);
        console.log(this.mediaArray);
    });
  }
}

