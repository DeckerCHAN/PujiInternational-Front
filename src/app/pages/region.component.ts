import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {regionInfoSet} from '../mock/region-info.data';
import {RegionInfo} from '../models/region-info';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
})

export class RegionComponent {

  region: RegionInfo;

  constructor(route: ActivatedRoute) {
    const regionId = route.snapshot.paramMap.get('id');
    this.region = regionInfoSet.find(x => x.id === regionId);
  }


}
