import { AppData } from "./app-data.service";

export type URL_KEYS =
  // Accounts Related URLs
  'explore' | 'food';


const UrlMapping = {
  //login and sign up

  explore: { url: AppData.baseUrl + '/account/explore', showMsg: true, showLoading: true },
  food: { url: AppData.baseUrl + '/home/food', showMsg: true, showLoading: true },
};

export class RequestUrl {
  static get(key: URL_KEYS): any {
    return UrlMapping[key];
  }
}
