import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Ad {
  id: string;
  imageUrl: string;
}

export class Link {
  id: string;
  imageUrl: string;
  link: string;
  name: string;
}

@Injectable()
export class KioskService {

  constructor(private http: HttpClient) { }

  public getAds(): Observable<Ad[]> {
    console.info('fetching all ads from backend');
    return this.http.get('api/ads').map((response: HttpResponse<Ad[]>) => {
      return response.body;
    });
  }

  public getAd(id: string): Observable<Ad> {
    return this.getAds().map((ads: Ad[]) => {
      return ads.find(ad => ad.id === id);
    });
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get('api/links').map((response: HttpResponse<Link[]>) => {
      return response.body;
    });
  }

}