import { Component, OnInit } from '@angular/core';
import {Media} from '../interfaces/media';
import {MediaService} from '../services/media.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: File;
  media: Media = {
    title: '',
    description: ''
  };


  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    const formData = new FormData();
    // create FormData-object
    // add title and description to FormData object
    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    // add file to FormData object
    formData.append('file', this.file);
    // send FormData object to API
    this.mediaService.upload(formData).subscribe(data => {
      console.log(data);
    }, (e: HttpErrorResponse) => {
      console.log(e);
    });
  }


}
