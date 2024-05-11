import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SlideshowService} from "../../services/slideshow.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  slideIndex = 0;
  images: string[] = [];
  slides?: HTMLCollectionOf<Element>;


  ngOnInit() {
    this.slide.getImages().then((urls: string[]) => {
      this.images = urls;
      setTimeout(() => {
        this.slides = document.getElementsByClassName("slideshow");
        this.slideshow();
      }, 0);
    });
  }

  constructor(private router: Router, private slide: SlideshowService) {}

  slideshow() {
    if (this.slides) {
      for (let i = 0; i < this.slides.length; i++) {
        (this.slides[i] as HTMLElement).style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > this.slides.length) {this.slideIndex = 1}
      if (this.slides[this.slideIndex-1]) {
        (this.slides[this.slideIndex-1] as HTMLElement).style.display = "block";
      }
      setTimeout(() => this.slideshow(), 2000);
    }
  }
}
