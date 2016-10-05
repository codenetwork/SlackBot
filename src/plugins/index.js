import clientAuth from './clientAuthenticatedPlugin';
import helloWorld from './helloWorld';
import antarcticWeather from './antarcticWeather';


function autoLoadPlugins(opts) {
  clientAuth(opts);
  helloWorld(opts);
  antarcticWeather(opts);
}

export default opts => autoLoadPlugins(opts);
