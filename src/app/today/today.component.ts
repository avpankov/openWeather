import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  
  lat = 51.678418;
  lng = 7.809007;
  weather!: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

  }
  

  getCity(city: string) {
    this.weatherService.getWeatherDataByCity(city).subscribe(data => {this.weather = data})
  }

}
