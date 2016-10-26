import clientAuth from './clientAuthenticatedPlugin';
import helloWorld from './helloWorld';
import antarcticWeather from './antarcticWeather';


export default function autoLoadPlugins(opts) {
  clientAuth(opts);
  helloWorld(opts);
  antarcticWeather(opts);
}
