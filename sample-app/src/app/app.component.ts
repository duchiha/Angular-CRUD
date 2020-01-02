import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Dashboard';
  constructor(private pagetitle: Title) { }
  ngOnInit(): void {
    this.pagetitle.setTitle(this.title);
  }
}
