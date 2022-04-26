import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'f4f393a6b57edd8d0d1a2677528233d0';

  constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat: any, lon: any) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lng', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey);

    return this.http.get(this.url, {params});
  }

  getWeatherDataByCity(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('appid', this.apiKey)
    .set('units', 'metric')

    return this.http.get(this.url, {params});
  }
}
