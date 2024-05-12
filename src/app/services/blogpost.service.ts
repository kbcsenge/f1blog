import { Injectable } from '@angular/core';
import {BlogPost} from "../modell/BlogPost";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  collectionName = 'Blogpost';
  constructor(private firestore: AngularFirestore) { }

  createBlogpost(blogpost: BlogPost) {
    const docRef = this.firestore.collection<BlogPost>(this.collectionName).doc(); // Új dokumentum létrehozása
    blogpost.id = docRef.ref.id;
    return docRef.set(blogpost); // A blogbejegyzés mentése a Firestore-ban
  }

  editBlogpost(id: string, blogpost: BlogPost) {
    return this.firestore.doc(`Blogpost/${id}`).update(blogpost);
  }

  getBlogpostsByUsername(username: string) {
    return this.firestore.collection('Blogpost', ref => ref.where('creator', '==', username)).snapshotChanges();
  }

  deleteBlogpost(id: string) {
    return this.firestore.doc(`Blogpost/${id}`).delete();
  }
}
