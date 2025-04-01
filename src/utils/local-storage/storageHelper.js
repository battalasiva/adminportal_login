import localStorageService from "./localStorageService";

const storageHelper = {
  saveData: (key, data) => {
    localStorageService.setItem(key, data);
  },

  getData: (key) => {
    return localStorageService.getItem(key);
  },

  removeData: (key) => {
    localStorageService.removeItem(key);
  },

  clearAllStorage: () => {
    localStorageService.clear();
  },
};

export default storageHelper;
