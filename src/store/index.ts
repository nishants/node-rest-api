import client from './client';
const redisClient = client();

export const setDriver = (redis: any) => redisClient.setDriver(redis.createClient());

export default redisClient;