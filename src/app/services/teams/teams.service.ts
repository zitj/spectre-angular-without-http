import { Injectable } from '@angular/core';
import { Team } from 'src/app/data-models/team';
@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor() {}
  panel: string = '';
  teams: Team[] = [];
}
