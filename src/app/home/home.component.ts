import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22]
  
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  styleBackGround(index){
      return `background-image: url(assets/images/gallery-${index}.jpg)`
  }

  href(index){
    return `assets/images/gallery-${index}.jpg`
  }
  navigateTo(url){
    this.router.navigateByUrl(url);
  }
}
