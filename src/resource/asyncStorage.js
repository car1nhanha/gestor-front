export const asyncStorage = {
  setItem(key, value) {
    try {
      await localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(`[setItem] erro enquanto definia a chave ${key} no asyncStorage`);
    }
  },
  getItem(key) {
    try {
      const value = localStorage.getItem(key);

      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log(`[getItem] erro enquanto obitia a chave ${key} do localStorage`);
    }
  },
  exists(key) {
    try {
      let value = localStorage.getItem(key) || "";
      value = JSON.parse(value);

      return !!value;
    } catch (error) {
      console.log(`[exists] erro enquanto verificava a chave ${key} existia em localStorage`);
    }
  },
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.log("erro enquanto limpava o localStorage");
    }
  },
};
