import config from 'config';

import {setDriver} from './store';

const useFakeRedis = config.get('redis.fake');

const redisDriver = useFakeRedis ? require('fakeredis') : require('redis');
if(useFakeRedis){
    console.log("Using fake redis");
}

setDriver(redisDriver);