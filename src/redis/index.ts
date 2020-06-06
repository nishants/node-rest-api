import redis from 'redis';
import client from './client'
export default async (onError: Function) => {
    return client(redis.createClient(), onError);
}