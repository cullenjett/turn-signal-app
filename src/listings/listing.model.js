import axios from 'axios';

const URL_ROOT = "https://api.blinker.com/api/v3"

export default class Listing {
  static page(pageNum=1) {
    return axios
      .get(`${URL_ROOT}/listings/search?page=${pageNum}&per_page=30`)
      .then(res => {
        let listings = res.data.results;
        return listings;
      });
  }
}