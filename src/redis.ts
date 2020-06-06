const redis = require("redis");

// @ts-ignore
export default async (onError) => {
    console.log('trying to run redis')

    const client = redis.createClient();

    client.on("error", onError);
    client.set("key", "value", redis.print);
    client.get("key", redis.print);
    console.log('redis connected....')
}