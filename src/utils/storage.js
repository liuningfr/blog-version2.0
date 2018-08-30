/**
 * sessionStorage 操作
 * localStorage 操作
 */

const storage = {
  set: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: key => {
    const value = localStorage.getItem(key) || sessionStorage.getItem(key);
    return value === 'undefined' ? undefined : JSON.parse(value);
  },
  clear: () => {
    sessionStorage.clear();
    localStorage.clear();
  },
};

export default storage;
