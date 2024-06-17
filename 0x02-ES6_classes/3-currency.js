export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  setCode(code) {
    if (typeof code === 'string') this._code = code;
    else throw new Error('Code must be a valid string');
  }

  getCode() {
    return this._code;
  }

  setName(name) {
    if (typeof name === 'string') this._name = name;
    else throw new Error('Name must be a valid string');
  }

  getName() {
    return this._name;
  }

  // our computed method over here
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
