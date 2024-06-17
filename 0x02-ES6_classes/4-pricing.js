import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('amount must be a valid number');
    }
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(value) {
    if (value instanceof Currency) {
      throw new Error('currency must be a valid OBJECT');
    }
    this._currency = value;
  }

  // Method to display full currency
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(number, conversionRate) {
    if (typeof number !== 'number' || typeof conversionRate !== 'number') throw new Error('Number or ConversionRate must be a valid number');
    return number * conversionRate;
  }
}
