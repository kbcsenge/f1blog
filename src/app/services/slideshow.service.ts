import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  constructor(private storage: AngularFireStorage) { }

  getImages(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let imgUrls = [];
      const ref = this.storage.storage.ref('slideshow');
      ref.listAll().then(res => {
        res.items.forEach(itemRef => {
          itemRef.getDownloadURL().then(url => {
            imgUrls.push(url);
            if (imgUrls.length === res.items.length) {
              resolve(imgUrls);
            }
          }).catch(err => reject(err));
        });
      }).catch(err => reject(err));
    });
  }

}
