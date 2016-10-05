import { CLIENT_EVENTS } from '@slack/client';

function clientAuth(opts) {
  opts.rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
    console.log(
      `Logged in as ${rtmStartData.self.name} ` +
      `of team ${rtmStartData.team.name}`
    );
  });
}

export default opts => clientAuth(opts);
