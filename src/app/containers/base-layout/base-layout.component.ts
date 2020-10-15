import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  constructor(private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {

  }


  goHome() {
    this.router.navigate(["todos"]);
  }


  useLanguage(lan: string) {
    this.translate.use(lan);
  }
}
