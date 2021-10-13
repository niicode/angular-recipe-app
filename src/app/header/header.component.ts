import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() featuredList = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string) {
    this.featuredList.emit(feature)
  }

}
