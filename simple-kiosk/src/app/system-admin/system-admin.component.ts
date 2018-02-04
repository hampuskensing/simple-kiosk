import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ad, KioskService, Link } from '../services/kiosk.service';

@Component({
  selector: 'app-system-admin',
  templateUrl: './system-admin.component.html',
  styleUrls: ['./system-admin.component.css']
})
export class SystemAdminComponent implements OnInit {

  ads: Ad[] = [];
  links: Link[] = [];

  private adForm: FormGroup;
  private linkForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private kioskService: KioskService) {
    this.adForm = formBuilder.group({
      name: ['', Validators.required],
      image: [null]
    });
    this.linkForm = formBuilder.group({
      name: ['', Validators.required],
      image: [null],
      linkUrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.kioskService.getAds().subscribe((ads) => {
      this.ads = ads;
    });
    this.kioskService.getLinks().subscribe((links) => {
      this.links = links;
    });
  }

  onSubmitAd() {
    const value = this.adForm.value;
    const ad = {
      name: value.name,
      imageUrl: ''
    };
    this.kioskService.addAd(ad).subscribe((ads) => {
      this.ads = ads;
    });
    this.adForm.reset();
  }

  onSubmitLink() {
    const value = this.linkForm.value;
    const link = {
      name: value.name,
      linkUrl: value.linkUrl,
      imageUrl: ''
    };
    this.kioskService.addLink(link).subscribe((links) => {
      this.links = links;
    });
    this.linkForm.reset();
  }

  removeAd(ad) {
    this.kioskService.deleteAd(ad.id).subscribe((ads) => {
      this.ads = ads;
    });
  }

  removeLink(link) {
    this.kioskService.deleteLink(link.id).subscribe((links) => {
      this.links = links;
    });
  }

}
