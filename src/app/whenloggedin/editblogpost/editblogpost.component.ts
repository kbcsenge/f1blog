import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogPost} from "../../modell/BlogPost";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BlogpostService} from "../../services/blogpost.service";

@Component({
  selector: 'app-editblogpost',
  templateUrl: './editblogpost.component.html',
  styleUrl: './editblogpost.component.scss'
})
export class EditblogpostComponent implements OnInit{
  blogPost: BlogPost = {id: '', creator: '', title: '', text: '', pictureUrl: '', date: new Date()};
  constructor( private router: ActivatedRoute,
               private auth: AngularFireAuth,
               private afs: AngularFirestore,
               private storage: AngularFireStorage,
               private blog: BlogpostService,
               private route: Router) {
  }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.getPost(id);
    }
  }

  getPost(id: string) {
    this.afs.collection('Blogpost').doc(id).valueChanges().subscribe(post => {
      if (post) {
        this.blogPost = {...this.blogPost, ...post};
      }
    });
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
    this.blogPost.date = new Date().toISOString();
    if (this.blogPost.id) {
      this.blog.editBlogpost(this.blogPost.id, this.blogPost);
    }
    this.route.navigate(['/home']);
  }

  goback(){
    this.route.navigate(['/home'])
  }
}
