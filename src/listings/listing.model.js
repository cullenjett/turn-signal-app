import axios from 'axios';
import querystring from 'qs';

const URL_ROOT = "https://api.blinker.com/api/v3"

export default class ListingModel {
  static where(query={}) {
    const qs = querystring.stringify(query);

    return axios
      .get(`${URL_ROOT}/listings/search?per_page=30&${qs}`)
      .then(res => {
        let listings = res.data.results;
        return listings;
      });
  }
}