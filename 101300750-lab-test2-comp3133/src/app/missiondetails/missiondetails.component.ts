import { Component, OnInit } from '@angular/core';
import { Rocket } from '../rocket-launcher.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent implements OnInit{
  mission:Rocket = {
    mission_name: "string",
    launch_year: "string",
    details: "string",
    links: {mission_patch_small: "string"},
  }
  

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('missionObj')) {
      this.mission = JSON.parse(this.route.snapshot.paramMap.get('missionObj') || '{}');
    }
    console.log(this.mission)
  }



}
