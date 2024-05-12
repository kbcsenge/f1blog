import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Bloggers} from "../../modell/Bloggers";
import {map, Observable} from "rxjs";
import {BlogPost} from "../../modell/BlogPost";
import {BlogpostService} from "../../services/blogpost.service";
import {BloggerService} from "../../services/blogger.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";


@Component({
  selector: 'app-seeothers',
  templateUrl: './seeothers.component.html',
  styleUrl: './seeothers.component.scss'
})
export class SeeothersComponent implements AfterViewInit{
  blogger$?: Observable<Bloggers>;
  blogposts$?: Observable<BlogPost[]>;
  pictureUrls: { [key: string]: Observable<string> } = {};
  constructor( private router: ActivatedRoute,
               private blog: BlogpostService,
               private blogger: BloggerService,
               private storage: AngularFireStorage,
               private route: Router) {
  }
  ngAfterViewInit() {
    const username = this.router.snapshot.paramMap.get('username');
    if (username) {
      this.blogger$ = this.blogger.getBlogger(username).pipe(
        map(blogger => {
          if (!blogger) {
            throw new Error('Nincs ilyen felhasználónévvel rendelkező Blogger objektum!');
          }
          return blogger;
        })
      );
      this.blogposts$ = this.blog.getBlogpostsByUsername(username).pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as BlogPost;
          return data;
        }))
      );
    }
  }
  getPictureUrl(picturePath: string): Observable<string> {
    if (!this.pictureUrls[picturePath]) {
      this.pictureUrls[picturePath] = this.storage.ref(picturePath).getDownloadURL();
    }
    return this.pictureUrls[picturePath];
  }

  goback(){
    this.route.navigate(['/home'])
  }
}
