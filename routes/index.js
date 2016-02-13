
/*
 * GET home page.
 */

exports.index = function(req, res){
	const name = 'Christopher Craig';
	const title = name + '---  Software Engineer';
	const salutation1 = 'Howdy, I\'m ' 
	const salutation2 = ' Denver-based Full Stack Engineer specializing in Javascript web apps.';
	const array1 = [
		{ name: 'US Treasury',
		  filename: 'USTreasurySeal1.jpg'
		},
		{ name: 'Pensco',
		  filename: 'pensco.jpg'
		},
		{ name: 'SunGard',
		  filename: 'sungard.jpg'
		},
		{ name: 'Sega',
		  filename: 'Sega_logo-2.jpg'
		},
		{ name: 'Marietta College',
		  filename: 'mariettacollege.jpg'
		},
		{ name: 'Fritz Institute',
		  filename: 'fritzInstitute.jpg'
		}
	]
		
	const array2 = [
		{ name: 'Marietta College', 
		  filename: 'MariettaCollege.png'},
		{ name: 'Nutmeg\'s', 
		  filename: 'Nutmeg2.png'},
		{ name: 'Pie In The Sky', 
		  filename: 'PieInTheSky.png'},
		{ name: 'Dennis Union Church', 
		  filename: 'duchurch.png'},
		{ name: 'First Presbyterian Church of Williamstown', 
		  filename: 'fpcwilliamstown.png'},  
		{ name: 'Bill Bailey Insurance', 
		  filename: 'bbins.png'},        
	];
	const thumbs = 'images/thumbs/'
	const fulls = 'images/fulls/'
	const workitem = '6u 12u$(xsmall) work-item'
	const fit = 'image fit thumb'


	indexObjs = {
		name: name,
		title: title, 
		salutation1: salutation1,
		salutation2: salutation2, 
		array1: array1,
		array2: array2,
		fulls: fulls,
		thumbs: thumbs,
		workitem: workitem,
		fit: fit		
	}
  res.render('index', indexObjs)
};