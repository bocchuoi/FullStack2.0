import { Pipe, PipeTransform } from '@angular/core';
import { Rocket } from './rocket-launcher.service';
@Pipe({ name: 'missionFilter' })
export class MissionFilter implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(missions: Rocket[], searchText: string): Rocket[] {
    if (!missions) {
      return [];
    }
    if (!searchText) {
      return missions;
    }
    const str = searchText.toLowerCase();

    return missions.filter(mission => {
        return mission.mission_name.toLowerCase().includes(str) || 
        (mission.details && mission.details.toLowerCase().includes(str)) ||
        mission.launch_year.includes(str)
    })
  }
}
