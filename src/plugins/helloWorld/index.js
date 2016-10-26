import { RTM_EVENTS } from '@slack/client';
import HelloWorlds from './HelloWorlds';

const helloGenerator = new HelloWorlds();

export default function getHelloWorld(opts) {
  opts.rtm.on(RTM_EVENTS.MESSAGE, (message) => {
    if (message.type === 'message') {
      const flattened = message.text.toLowerCase().replace(/\s/g, '');
      if (flattened.includes('helloworld')) {
        console.log(`helloWorld: Responding with wit to ${message.channel}`);
        opts.rtm.sendMessage(helloGenerator.getHelloWorld(), message.channel);
      }
    }
  });
}
