import Axios from 'axios';
import Main from "./models/main";


/*export default class WeatherService {
  private readonly URL = 'http://api.openweathermap.org/data/2.5/weather?lat=53.57532&lon=10.01534&appid=mykey&units=metric&lang=de';
  private coordinates: any = {};

  constructor(coordinates: any) {
    this.coordinates = coordinates;
  }

  async get() : Promise<any>
  {
    return await Axios.get(`${this.URL}`)
    // .then((res: any) => console.log(res)).catch((error: any) => console.error(error));
  }
}
 */

export default class WeatherData {




   private WeekTemperatureArray: Main[] = [
     { temp:  20.0, pressure: 1009, humidity:  64, temp_min:   17, temp_max:   23.33  },
     { temp:  21.0, pressure: 1012, humidity:  84, temp_min:   18, temp_max:   24.33  },
     { temp:  22.0, pressure: 1015, humidity:  74, temp_min:   19, temp_max:   25.33  },
     { temp:  23.0, pressure: 1018, humidity:  60, temp_min:   20, temp_max:   26.33  },
     { temp:  24.0, pressure: 1021, humidity:  54, temp_min:   21, temp_max:   27.33  },
     { temp:  25.0, pressure: 1024, humidity:  44, temp_min:   23, temp_max:   28.33  },
     { temp:  26.0, pressure: 1027, humidity:  34, temp_min:   25, temp_max:   29.33  },
   ]

  getWeeklyData() : Main[]
  {
     return this.WeekTemperatureArray
  }
}



