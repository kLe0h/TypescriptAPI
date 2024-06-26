import { DiaryEntry, VisibilityState, WeatherState } from "../types"

//Definiremos nuestro JSON a partir de los tipos creados, asi tendremos un control mas fuerte.
const diaryEntries: DiaryEntry[] = [
  {
      "id": 1,
      "date": "2017-01-01",
      "weather": WeatherState.Rainy,
      "visibility": VisibilityState.Poor,
      "comment": "Pretty scary flight, I'm glad I'm alive"
  },
  {
      "id": 2,
      "date": "2017-04-01",
      "weather": WeatherState.Sunny,
      "visibility": VisibilityState.Great,
      "comment": "Everything went better than expected, I'm learning much"
  },
  {
      "id": 3,
      "date": "2017-04-15",
      "weather": WeatherState.Windy,
      "visibility":  VisibilityState.Good,
      "comment": "I'm getting pretty confident although I hit a flock of birds"
  },
  {
      "id": 4,
      "date": "2017-05-11",
      "weather": WeatherState.Cloudy,
      "visibility": VisibilityState.Good,
      "comment": "I almost failed the landing but I survived"
  },
]

export default diaryEntries