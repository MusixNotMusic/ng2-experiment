import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.less']
})
export class DropListComponent implements OnInit {
  public movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    console.log('cdkDropListDropped');
  }

  constructor() { }

  ngOnInit(): void {
  }

  dragStart(event: CdkDrag): void {
    console.log('cdkDragStart event ==>', event);
  }

  dragMove(): void {
    console.log('cdkDragMove event ==>', event);
  }

}
