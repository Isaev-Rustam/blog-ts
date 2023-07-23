class LocalStorage {
  static get(key: string): string | null {
    return localStorage.getItem(key);
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  // static clear(static) {}
}

export default LocalStorage;
