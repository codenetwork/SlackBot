import clientAuth from './clientAuthenticatedPlugin';
import helloWorld from './helloWorld';

function autoLoadPlugins(opts) {
  clientAuth(opts);
  helloWorld(opts);
}

export default opts => autoLoadPlugins(opts);
