import { Component, OnInit } from '@angular/core';
import { Training } from '../../_models/training';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  trainings: Training[];
  name: string = "";
  photoUrl: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.trainings = [
      {
        name: 'todo',
        photoUrl: 'First'
      }
    ]
  }

  deleteTraining(id: number) {
    this.trainings = this.trainings.filter((v, i) => i !== id);
  }

  addTraining() {
    this.trainings.push({
      name: this.name,
      photoUrl: this.photoUrl
    });

    this.name = "";
    this.photoUrl = "";
  }
}
