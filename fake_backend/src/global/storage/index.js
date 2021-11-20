module.exports = class ServerStorage {
  static storage = {};

  static toString() {
    return JSON.stringify(this.storage);
  }

  static getAll() {
    return this.storage;
  }

  static clearAll() {
    this.storage = {};
  }

  static getItem(item) {
    return this.storage[item];
  }

  static setItem(item, value) {
    this.storage[item] = value;
  }

  static removeItem(item) {
    delete this.storage[item];
  }
};
