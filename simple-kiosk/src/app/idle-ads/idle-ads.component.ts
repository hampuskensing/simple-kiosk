import { Component, OnInit } from '@angular/core';
import { Ad, KioskService } from '../services/kiosk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idle-ads',
  templateUrl: './idle-ads.component.html',
  styleUrls: ['./idle-ads.component.css']
})
export class IdleAdsComponent implements OnInit {

  constructor(private kioskService: KioskService, private router: Router) { }

  ngOnInit() {
    this.kioskService.getAds().subscribe((ads: Ad[]) => {
      const id = ads[0].id || 'no-ad-found';
      this.router.navigate([
        'idle-ad', { id: id }
      ]);
    });
  }

}
