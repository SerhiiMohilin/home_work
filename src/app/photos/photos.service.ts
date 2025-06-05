import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoType } from './photos.type';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  API_URL = 'https://picsum.photos/v2/list?page=2&limit=20'

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<PhotoType[]>(this.API_URL)
  }
}
