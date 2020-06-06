import store from '../store';

export const setValue = (key: string, value: string) => store.setString(key, value);
export const getStore = () => store.getAllKeys();