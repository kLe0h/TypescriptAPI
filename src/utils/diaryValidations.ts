import { NewDiaryEntry, VisibilityState, Weather, WeatherState } from "../types";


const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String;
}

const isDate = (date: string) => {
  return Boolean(Date.parse(date));
}

const isWeather = (weather: any) : boolean => {
  return Object.values(WeatherState).includes(weather);
}

const isVisibility = (visibility: any) : boolean => {
  return Object.values(VisibilityState).includes(visibility);

}

const parseComment = (commentFromRequest: any): string => {
  if(!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!dateFromRequest || !isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest;
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!weatherFromRequest || !isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const parsevisibility = (visibilityFromRequest: any): VisibilityState => {
  if (!visibilityFromRequest || !isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {

  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parsevisibility(object.visibility)
  }

  return newEntry;

}

export default toNewDiaryEntry;