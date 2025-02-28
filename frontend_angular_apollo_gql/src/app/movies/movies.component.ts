import { Component } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { GET_MOVIES  } from '../graphql/graphql.queries';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: any[] = [];
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_MOVIES
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.movies = data.movies;
      this.error = error;
  }
  );
  }
}
