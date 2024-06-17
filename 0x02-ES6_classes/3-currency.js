export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  setCode(code) {
    this._code = code;
  }

  getCode() {
    return this._code;
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  // our computed method over here
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
