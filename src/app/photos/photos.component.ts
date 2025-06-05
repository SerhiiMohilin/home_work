import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { PhotoType } from './photos.type';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent implements OnInit {
  photos: Array<PhotoType> = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService
      .getPhotos()
      .subscribe((response) => (this.photos = response));
  }
}

