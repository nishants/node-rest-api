import store, {setDriver} from './store';

const redisDriver = process.env.FAKE_REDIS ? require('fakeredis') : require('redis');

setDriver(redisDriver);

if(process.env.FAKE_REDIS){
    console.log("Using fake redis");
}

(async() => {
  await store.setObject("key-1", {key: 'key-1'})
  const value = await store.getObject('key-1');
  console.log("value form redis : ", value);
})();