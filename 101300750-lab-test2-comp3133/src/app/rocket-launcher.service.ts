import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




export interface Rocket {
  mission_name: string
  launch_year: string
  details: string
  links: {
    mission_patch_small: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class RocketLauncherService {

  constructor(private _http:HttpClient) { }

  fetch() {
    return this._http.get<Rocket[]>('https://api.spacexdata.com/v3/launches')
  }
}
