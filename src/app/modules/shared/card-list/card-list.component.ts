import { Component, OnInit, TemplateRef, ContentChild, Input } from '@angular/core';
import { IProject } from '../../api-rest/services/interfaces/projectInterface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  
  @Input() list: Array<any>;
  @ContentChild('card',{static: false}) cardTemplateRef: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}