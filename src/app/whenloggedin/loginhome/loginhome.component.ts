import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable, switchMap} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Bloggers} from "../../modell/Bloggers";
import {BlogpostService} from "../../services/blogpost.service";
import {BlogPost} from "../../modell/BlogPost";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrl: './loginhome.component.scss'
})
export class LoginhomeComponent implements AfterViewInit{
  blogger$?: Observable<Bloggers>;
  blogposts$?: Observable<BlogPost[]>;
  pictureUrls: { [key: string]: Observable<string> } = {};

  constructor(private storage: AngularFireStorage,
              private afs: AngularFirestore,
              private auth: AngularFireAuth,
              private router: Router,
              private blog: BlogpostService) {}

  ngAfterViewInit() {
    this.auth.user.subscribe(user => {
      if (user) {
        this.blogger$ = this.afs.collection('Bloggers', ref => ref.where('email', '==', user.email)).valueChanges().pipe(
          map((bloggers: any) => bloggers[0] as Bloggers)
        );

        this.blogger$.subscribe(blogger => {
          this.blogposts$ = this.blog.getBlogpostsByUsername(blogger.username).pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data() as BlogPost;
              return data;
            }))
          );
        });
      }
    });
  }
  getPictureUrl(picturePath: string): Observable<string> {
    if (!this.pictureUrls[picturePath]) {
      this.pictureUrls[picturePath] = this.storage.ref(picturePath).getDownloadURL();
    }
    return this.pictureUrls[picturePath];
  }
  createNewPost(){
    this.router.navigate(['/new']);
  }

  editPost(id: string){
    this.router.navigate(['/edit', id]);
  }

  deletePost(id: string){
    if (id) {
      this.afs.doc(`Blogpost/${id}`).get().subscribe((doc) => {
        if (doc.exists) {
          let post = doc.data() as BlogPost;
          this.storage.ref(post.pictureUrl).delete().subscribe(() => {
            this.blog.deleteBlogpost(id).then(() => {
              console.log('Dokumentum sikeresen törölve!');
            }).catch((error) => {
              console.error('Hiba a dokumentum törlése közben: ', error);
            });
          });
        } else {
          console.error('Nem létezik ilyen id-jű dokumentum.');
        }
      });
    } else {
      console.error('Nincs megadva id.');
    }
  }


}
