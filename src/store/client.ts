import {RedisClient} from 'redis';

export default () => {
    let client: RedisClient;

    return {
        setDriver: (c: RedisClient) => {
            client = c;
        },
        onError: (onError: Function) => {
            // @ts-ignore
            client.on('error', onError);
        },
        getObject: (key: string) => new Promise((resolve, reject) => {
            // @ts-ignore
            client.get(key, (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(JSON.parse(result));
            });
        }),
        setObject: (key: string, value: any) => new Promise((resolve, reject) => {
            // @ts-ignore
            client.set(key, JSON.stringify(value), (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            });
        })

    };
};