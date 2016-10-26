# SlackBot
## Getting Started
To get started with QUT's better SlackBot, you will need the best language in the world:
NodeJS 6.7.0.

To get started, copy and paste the below code into your terminal:

```shell
git clone git@github.com:codenetwork/SlackBot.git
cd SlackBot
npm install
npm start
```

### Linter
We're currently using AirBnb's ES6 linter standard.  Test your code with
`npm run lint` before you make a pull request.

### Logging
Upon your plugin successfully completing a task, you should log with what task was
complete. For example:

```js
console.log(`helloWorld: Responding with wit to ${message.channel}`);
```

This signifies that the helloWorld plugin has successfully began responding to a event.
Preferably, an error handling callback should be done, but, I'm still half asleep.
I'll do it later.
