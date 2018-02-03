import { Component, OnInit } from '@angular/core';
import { Ad, KioskService, Link } from '../services/kiosk.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  links: Link[];

  constructor(private kioskService: KioskService) { }

  ngOnInit() {
    this.kioskService.getLinks().subscribe((links: Link[]) => {
      this.links = links;
    });
  }

}
