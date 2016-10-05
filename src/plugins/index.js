import clientAuth from './clientAuthenticatedPlugin';

function autoLoadPlugins(opts) {
  clientAuth(opts);
}

export default opts => autoLoadPlugins(opts);
