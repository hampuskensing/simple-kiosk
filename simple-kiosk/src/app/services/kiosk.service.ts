import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Ad {
  id: string;
  name: string;
  imageUrl: string;
}

export class Link {
  id: string;
  imageUrl: string;
  linkUrl: string;
  name: string;
}

@Injectable()
export class KioskService {

  constructor(private http: HttpClient) { }

  public getAds(): Observable<Ad[]> {
    console.info('fetching all ads from backend');
    return this.http.get('api/ads').map((ads: Ad[]) => {
      console.log('get ads response', ads);
      return ads;
    });
  }

  public getAd(id: string): Observable<Ad> {
    return this.getAds().map((ads: Ad[]) => {
      return ads.find(ad => ad.id === id);
    });
  }

  public getLinks(): Observable<Link[]> {
    return this.http.get('api/links').map((links: Link[]) => {
      return links;
    });
  }

  public addAd(ad): Observable<Ad[]> {
    return this.http.post('api/ads', ad).map((ads: Ad[]) => {
      return ads;
    });
  }

  public addLink(link): Observable<Link[]> {
    return this.http.post('api/links', link).map((links: Link[]) => {
      return links;
    });
  }

  public deleteAd(id): Observable<Ad[]> {
    return this.http.delete('api/ads/' + id).map((ads: Ad[]) => {
      return ads;
    });
  }

  public deleteLink(id): Observable<Link[]> {
    return this.http.delete('api/links/' + id).map((links: Link[]) => {
      return links;
    });
  }

}
