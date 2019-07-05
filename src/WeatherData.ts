import { Injectable} from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable()
export class WeatherService
{
  private readonly URL = 'http://api.openweathermap.org/data/2.5/weather?lat=53.57532&lon=10.01534&appid=myId&units=metric&lang=de';

  constructor(
    protected httpClient: HttpClient,
  ) {}

  public get(): string
  {
    return this.httpClient.get(`${this.URL}`);
  }
}



