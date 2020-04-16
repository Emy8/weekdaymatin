var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = ["Salut ! J'espere que sa va bien aujourd'hui, je lance ce thread du jour ou vous pouvez mettre vos meilleurs cours du navet en ce matin de semaine (un autre arrivera cet après midi)!\n \n#ACNH #ACNHturnips #turnips #TurnipPrice #AnimalCrossingNewHorizons #AnimalCrossing"];
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
    cycle: 'Weekday 09:09:12'
}, function (ot) {
    console.log('weekday!')
    ot.done()
    return
})
