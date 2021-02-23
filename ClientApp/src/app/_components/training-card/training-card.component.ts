import { Component, OnInit, Input } from '@angular/core';
import { Training } from '../../_models/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css']
})
export class TrainingCardComponent implements OnInit {
  @Input() training: Training;
  

  constructor() { }

  ngOnInit() {
  }

}
