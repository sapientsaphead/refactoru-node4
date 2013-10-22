
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
	res.render('index');
});

app.get('/users', user.list);

app.get('/route', function(req, res){
	var magellanRoute = {
		"Seville" : {stop : "Seville", 
		desc : "On 10 August 1519, the five ships under Magellan's command left Seville and descended the Guadalquivir River to Sanlúcar de Barrameda, at the mouth of the river. There they remained more than five weeks. Finally they set sail on 20 September.",
		next : "Canary Islands"
		},
		"Canary Islands" : { stop : "Canary Islands",
		desc : "King Manuel I ordered a Portuguese naval detachment to pursue Magellan, but the explorer evaded them. The fleet stopped briefly in the Canary Islands for more provisions; later, Magellan learned that his suppliers had swindled him by misrepresenting the quantity and quality of supplies they provided.",
		next : "Cape Verde"
		},
		"Cape Verde" : { stop : "Cape Verde",
		desc : 'Twenty crewmen died of starvation before Elcano put into Cape Verde, a Portuguese holding, where he abandoned 13 more crew on 9 July in fear of losing his cargo of 26 tons of spices (cloves and cinnamon).',
		next : "Strait of Magellan"
		},
		"Strait of Magellan" : { stop : "Strait of Magellan",
		desc : 'The journey resumed. The help of Duarte Barbosa was crucial in facing the riot in Puerto San Julian; Magellan appointed him as captain of the Victoria. The Santiago was sent down the coast on a scouting expedition and was wrecked in a sudden storm. All of its crew survived and made it safely to shore. Two of them returned overland to inform Magellan of what had happened, and to bring rescue to their comrades. After this experience, Magellan decided to wait for a few weeks more before resuming the voyage. </p><p>At 52°S latitude on 21 October, the fleet reached Cape Virgenes and concluded they had found the passage, because the waters were brine and deep inland. Four ships began an arduous trip through the 373-mile (600 km) long passage that Magellan called the Estrecho (Canal) de Todos los Santos, ("All Saints\' Channel"), because the fleet travelled through it on 1 November or All Saints\' Day. The strait is now named the Strait of Magellan. He first assigned Concepcion and San Antonio to explore the strait, but the latter, commanded by Gómez, deserted and returned to Spain on 20 November. On 28 November, the three remaining ships entered the South Pacific. Magellan named the waters the Mar Pacifico (Pacific Ocean) because of its apparent stillness.[19] Magellan and his crew were the first Europeans to reach Tierra del Fuego just east of the Pacific side of the strait.',
		next : "Guam"
		},
		"Guam" : { stop : "Guam",
		desc : 'Heading northwest, the crew reached the equator on 13 February 1521. On 6 March they reached the Marianas and Guam. Magellan called Guam the "Island of Sails" because they saw a lot of sailboats. They renamed as Ladrones Island (Island of Thieves) because many of the small boats of Trinidad were stolen there.',
		next : "Phillipines"
		},
		"Phillipines" : { stop : "Phillipines",
		desc : 'On 17 March Magellan reached the island of Homonhon in the Philippines, with 150 crew left. Members of his expedition became the first Spaniards to reach the Philippine archipelago, but they were not the first Europeans.</p><p>Magellan relied on Enrique, his Malay servant and interpreter, to communicate with the native tribes. He had been indentured by Magellan in 1511 after the colonization of Malacca, and had accompanied him through later adventures. They traded gifts with Rajah Siaiu of Mazaua[21] who guided them to Cebu on 7 April.</p><p>Rajah Humabon of Cebu was friendly towards Magellan and the Spaniards; both he and his queen Hara Amihan were baptized as Christians. Afterward, Rajah Humabon and his ally Datu Zula convinced Magellan to kill their enemy, Datu Lapu-Lapu, on Mactan. Magellan wanted to convert Lapu-Lapu to Christianity, as he had Humabon, but Lapu-Lapu rejected that. On the morning of 27 April 1521, Magellan sailed to Mactan with a small attack force. During the resulting battle against Lapu-Lapu\'s troops, Magellan was struck by a bamboo spear, and later surrounded and finished off with other weapons.',
		next : "Seville"
		}
	}
	
	res.send(req.query);
	
})


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
