import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherService
{
  private readonly URL = 'http://api.openweathermap.org/data/2.5/weather?lat=53.57532&lon=10.01534&appid=mykes&units=metric&lang=de';

  //private weatherObservable : Observable<any[]> ;


  constructor( private httpClient: HttpClient) {
  }


  async get() : Promise<string>
  {
    const response = this.httpClient.get(`${this.URL}`).toPromise();
    return response[Symbol.toStringTag];
  }
}



