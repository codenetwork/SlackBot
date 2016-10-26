import fs from 'fs';
import path from 'path';

export default class SecretUtility {
  constructor() {
    this.slackKeyPath = path.join(__dirname, '..', 'config', 'keys', 'SLACK_API.json');
    this.slackAPI = null;
  }

  saveSlack() {
    if (process.env.SLACK_API) {
      this.slackAPI = process.env.SLACK_API;
    } else if (
      fs.lstatSync(this.slackKeyPath).isFile()
    ) {
      this.slackAPI = JSON.parse(
        fs.readFileSync(
          this.slackKeyPath,
          'utf8'
        )
      ).token;
    } else {
      throw 'No Process Environment or API Key provided :(';
    }
    return this.slackAPI;
  }

  getSlackAPI() {
    if (!this.slackAPI) throw 'No API key set! Run saveSlack()';
    return this.slackAPI;
  }
}
