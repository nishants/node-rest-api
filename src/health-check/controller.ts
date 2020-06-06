import store from '../store';

export const setValue = async (key: string, value: string) => {
    await store.setString(key, value)
};