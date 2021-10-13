import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featuredValue = "recipe"
  onNavigate(feature:string) {
    this.featuredValue = feature
  }
}
