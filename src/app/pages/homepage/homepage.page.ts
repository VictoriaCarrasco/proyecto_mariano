import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  

  constructor(private router:Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl("login");
  }
  }




