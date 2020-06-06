import {RedisClient} from 'redis';

export default () => {
    let redis: RedisClient;

    let client = {
        setDriver: (c: RedisClient) => {
            redis = c;
        },
        onError: (onError: Function) => {
            // @ts-ignore
            redis.on('error', onError);
        },
        getObject: (key: string) => new Promise((resolve, reject) => {
            // @ts-ignore
            redis.get(key, (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(JSON.parse(result));
            });
        }),
        setObject: (key: string, value: any) => new Promise((resolve, reject) => {
            // @ts-ignore
            redis.set(key, JSON.stringify(value), (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            });
        }),
        setString: (key: string, value: string) => new Promise((resolve, reject) => {
            // @ts-ignore
            redis.set(key, value, (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            });
        }),
        getString: (key: string) => new Promise((resolve, reject) => {
            // @ts-ignore
            redis.get(key, (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            });
        }),
        getAllKeys: () => new Promise((resolve, reject) => {
            // @ts-ignore
            redis.keys( '*',async (error, allKeys) => {
                if (error) {
                    return reject(error);
                }
                const result = {};
                for(let i =0; i < allKeys.length; i++){
                    // @ts-ignore
                    result[allKeys[i]] = await client.getString(allKeys[i]);
                }
                resolve(result);
            });
        })
    };
    return client;
};