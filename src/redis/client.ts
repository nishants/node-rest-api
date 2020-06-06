

// @ts-ignore
export default (client, onError) => {
    client.on("error", onError);

    return {
        // @ts-ignore
        getObject: (key) => new Promise((resolve, reject) => {
            // @ts-ignore
            client.get(key, (error, result) => {
                if(error){
                    return reject(error);
                }
                resolve(JSON.parse(result));
            });
        }),
        setObject: (key: string, value: any) => new Promise((resolve, reject) => {
            // @ts-ignore
            client.set(key, JSON.stringify(value), (error, result) => {
                if(error){
                    return reject(error);
                }
                resolve(result);
            });
        })

    }
};