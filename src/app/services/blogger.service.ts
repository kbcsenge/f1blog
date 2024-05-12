import { Injectable } from '@angular/core';
import {Bloggers} from "../modell/Bloggers";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  collectionName = 'Bloggers';
  constructor(private afs: AngularFirestore) { }

  create(blogger: Bloggers) {
    return this.afs.collection<Bloggers>(this.collectionName).doc().set(blogger);
  }

  getBlogger(username: string): Observable<Bloggers> {
    return this.afs.collection('Bloggers', ref => ref.where('username', '==', username))
      .snapshotChanges()
      .pipe(
        map(actions => {
          if (actions.length > 1) {
            throw new Error('Több Blogger objektum is található ugyanazzal a felhasználónévvel!');
          }
          const data = actions[0].payload.doc.data() as Bloggers;
          const id = actions[0].payload.doc.id;
          return { id, ...data };
        })
      );
  }
}
