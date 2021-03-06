import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:{name:string, description:string, imagePath:string}
  @Output() selectedItem = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.selectedItem.emit()
  }

}
