var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = ["Hello World!"];
var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}

writeTweet()

var ontime = require('ontime')
ontime({
    cycle: 'Weekday 08:00:00'
}, function (ot) {
    console.log('weekday!')
    ot.done()
    return
})
