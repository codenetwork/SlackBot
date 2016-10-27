# SlackBot

## Prerequisites
#### 1. Install NVM
###### 1.1 Linux
```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```
###### 1.2 Mac
```bash
brew install nvm
```
###### 1.3 Windows
```cmd
rmdir C:\Windows\System32
```

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
*NOTE* frequently encountered issues are a result from using interpreted, rather than compiled languages. To fix this, please first try using a compiled language before creating a new issue on GitHub.

### Logging
Upon your plugin successfully completing a task, you should log with what task was
complete. For example:

```js
console.log(`helloWorld: Responding with wit to ${message.channel}`);
```

This signifies that the helloWorld plugin has successfully began responding to a event.
Preferably, an error handling callback should be done, but, I'm still half asleep.
We'll do it later.
