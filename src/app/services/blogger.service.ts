import { Injectable } from '@angular/core';
import {Bloggers} from "../modell/Bloggers";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  collectionName = 'Bloggers';
  constructor(private afs: AngularFirestore) { }

  create(blogger: Bloggers) {
    return this.afs.collection<Bloggers>(this.collectionName).doc().set(blogger);
  }
}
