import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Ad, KioskService } from '../services/kiosk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-idle-ad',
  templateUrl: './idle-ad.component.html',
  styleUrls: ['./idle-ad.component.css']
})
export class IdleAdComponent implements OnInit {

  ad$: Observable<Ad>;

  constructor(private route: ActivatedRoute, private kioskService: KioskService) { }

  ngOnInit() {
    this.ad$ = this.route.params.switchMap((params) => {
        const id = params.id;
        console.info('get ad', id)
        return this.kioskService.getAd(id);
      });
  }

}
