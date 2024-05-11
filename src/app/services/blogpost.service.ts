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
    return this.firestore.collection<BlogPost>(this.collectionName).doc().set(blogpost);
  }

  editBlogpost(id: string, blogpost: BlogPost) {
    return this.firestore.doc(`blogposts/${id}`).update(blogpost);
  }

  getBlogpostsByUsername(username: string) {
    return this.firestore.collection('blogposts', ref => ref.where('username', '==', username)).snapshotChanges();
  }

  deleteBlogpost(id: string) {
    return this.firestore.doc(`blogposts/${id}`).delete();
  }
}
