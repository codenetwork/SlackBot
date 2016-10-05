/**
 * Created by joshm on 5/10/2016.
 */
import {CLIENT_EVENTS} from '@slack/client';
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
const request = require('request');

function antarcticWeather(opts) {

  opts.rtm.on(RTM_EVENTS.MESSAGE, (message) => {

    const flattened = message.text.toLowerCase().replace(/\s+/g, '').toLowerCase();
    coldWords.map((coldWord)=> {
      // opts.rtm.sendMessage(coldWord, message.channel);
        if(flattened.includes(coldWord)){
          startWeatherInAntarctica(opts.rtm, message.channel);
        }
    });
  })
}

var coldWords = ["frigid", "cold", "freeze", "freezing", "chill", "chilled", "burrr", "bur", "burr"];

function startWeatherInAntarctica(rtm, channel) {
  new Promise((resolve, reject) => {
        request({
          url: 'http://uselessapi.azurewebsites.net/antarcticweather'
        }, (err, res) => {
          if (err) reject(err + " error");
          else resolve(res.body);
        })
      }
  ).then(
      (data) => {
        console.log(data);
        rtm.sendMessage("You think that is cold? " + data, channel);
      }
  )
}

export default opts => antarcticWeather(opts);