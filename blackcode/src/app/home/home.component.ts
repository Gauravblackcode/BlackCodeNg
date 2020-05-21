import { Component, OnInit , HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 350) {
       const element = document.getElementById('cardid');
       const element1 = document.getElementById('cardid2');
       const element2 = document.getElementById('cardid3');
       element.classList.add('animate');
       element1.classList.add('animate');
       element2.classList.add('animate');
     }

  }


}
