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
    let sign = num < 0 ? "-" : "";
    let numString = Math.abs(Number(num)).toString();
    let remainder = numString.length > 3 ? numString.length % 3 : 0;

    return sign + (remainder ? numString.substr(0, remainder) + "," : "") + numString.substr(remainder).replace(/(\d{3})(?=\d)/g, "$1,");
  }
}