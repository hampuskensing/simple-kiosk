import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Ad, KioskService } from '../services/kiosk.service';

@Component({
  selector: 'app-idle-ad',
  templateUrl: './idle-ad.component.html',
  styleUrls: ['./idle-ad.component.css']
})
export class IdleAdComponent implements OnInit {

  ad: Ad;

  constructor(private route: ActivatedRoute, private kioskService: KioskService) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
        const id = params.get('id');
        console.info('get ad', id)
        this.kioskService.getAd(id).subscribe(ad => this.ad = ad);
      });
  }

}
