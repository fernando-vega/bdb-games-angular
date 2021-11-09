import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PlatformsService {

  constructor(private httpClient: HttpClient) { }

  private url = `${environment.api_url}`;

  getAllPlatforms(): Promise<any> {
    return this.httpClient.get<any>(this.url)
      .toPromise()
      .then((response: any) => {
        return response;
    })
  }
}
