export default class ListingDecorator {
  constructor(listing) {
    this.listing = listing;
  }

  get thumbnailUrl() {
    return this.listing.thumbnail_url;
  }

  get headline() {
    return this.listing.headline;
  }

  get askingPrice() {
    return "$" + this.addCommas(this.listing.asking_price);
  }

  get isFinanceable() {
    return this.listing.financeable;
  }

  get monthlyPayment() {
    return "$" + this.addCommas(this.listing.estimated_monthly_payment);
  }

  get miles() {
    return this.addCommas(this.listing.miles);
  }

  // http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
  addCommas(num) {
    var n = num,
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
  }
}