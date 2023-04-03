import { Component, OnInit } from '@angular/core';
import { RocketLauncherService, Rocket } from '../rocket-launcher.service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missionList: Rocket[] = []
  searchStr:string = ""

  constructor(private rocketlauch: RocketLauncherService, private router:Router) {}
  ngOnInit() {
    this.rocketlauch.fetch().subscribe(res=>{
      for (var i of res) {
        const obj = {
          mission_name: i.mission_name,
          launch_year: i.launch_year,
          details: i.details,
          links: {
            mission_patch_small: i.links.mission_patch_small
          }
        }
        this.missionList.push(obj)
      }
    })
  }

  navigate(mission:Rocket) {
    this.router.navigate(['/details', {missionObj: JSON.stringify(mission)}]);
  }

  // search() {
  //   if (this.searchStr == "") {
  //     this.ngOnInit()
  //     return
  //   }
  //   let str = this.searchStr.toLowerCase()
  //   // let missionCopy = Object.assign([], this.missionList)
  //   this.missionList = this.missionList.filter(mission=> {
  //     return mission.mission_name.toLowerCase().includes(str) || 
  //     (mission.details && mission.details.toLowerCase().includes(str)) ||
  //     mission.launch_year.includes(str)
  //   })
  // }
}
