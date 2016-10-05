import SlackClient from '@slack/client';
import SecretUtility from './helpers/SecretUtility';
import pluginLoader from './plugins';

const secretUtil = new SecretUtility();
secretUtil.saveSlack();
const rtm = new SlackClient.RtmClient(secretUtil.getSlackAPI());
pluginLoader({ rtm });

rtm.start();
