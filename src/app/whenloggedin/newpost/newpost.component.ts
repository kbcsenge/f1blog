import { Component } from '@angular/core';
import {BlogPost} from "../../modell/BlogPost";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {BlogpostService} from "../../services/blogpost.service";
import {Bloggers} from "../../modell/Bloggers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrl: './newpost.component.scss'
})
export class NewpostComponent {
  blogPost: BlogPost
  constructor(private auth: AngularFireAuth,
              private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private blog: BlogpostService,
              private router: Router)
  {

    this.blogPost = { id: '', title: '', text: '', pictureUrl: '', creator: '', date: '' };
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    this.auth.user.subscribe(user => {
      if (user && user.email) {
        const filePath = `blogpictures/${user.email}${file.name}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
        task.snapshotChanges().pipe(
          finalize(() => fileRef.getDownloadURL().subscribe(url => {
            this.blogPost.pictureUrl = filePath;
            console.log(url);
          }))
        ).subscribe();
      }
    });
  }
  save() {
    this.auth.user.subscribe(user => {
      if (user && user.email) {
        this.afs.collection('Bloggers', ref => ref.where('email', '==', user.email)).valueChanges().subscribe((data: any[]) => {
          if (data && data.length > 0) {
            const bloggerData = data[0] as Bloggers;
            if ('username' in bloggerData) {
              this.blogPost.creator = bloggerData.username;
              this.blogPost.date = new Date().toISOString();
              this.blog.createBlogpost(this.blogPost);
              this.router.navigate(['/home'])
            } else {
              console.error('A felhasználónak nincs username tulajdonsága.');
            }
          } else {
            console.error('Nem található a felhasználó a Bloggers kollekcióban.');
          }
        });
      }
    });
  }

  goback(){
    this.router.navigate(['/home'])
  }
}
