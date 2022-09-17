import { Component, OnInit, TemplateRef, ContentChild } from '@angular/core';
import { OutputFileType } from 'typescript';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  tasks: Array<string> = ['task1', 'task2', 'task3']
  @ContentChild('card',{static: false}) cardTemplateRef: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
