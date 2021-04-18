import { Component, Input, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  // nazwa listy verbs albo nouns
  @Input() title: string;
  // przechowuję listę przypisanych słów
  @Input() words: WordType[];

  constructor() { }

  ngOnInit(): void {
  }

}
