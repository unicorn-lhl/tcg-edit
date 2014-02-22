<?php
//exit(print_r($_GET));
$abilities = [
	//"options" => [
	//[
		"Applejack", 
		"Rainbow Dash", 
		"Fluttershy", 
		"Rarity", 
		"Twilight Sparkle", 
		"Pinkie Pie"
	//]
];
$labeledAbilities = [
	//"options" => [
	[
		"label" => "Applejack", 
		"value" => "aj"
	],
	[
		"label" => "Rainbow Dash", 
		"value" => "rd"
	],
	[
		"label" => "Fluttershy", 
		"value" => "fs"
	],
	[
		"label" => "Rarity", 
		"value" => "rar"
	],
	[
		"label" => "Twilight Sparkle", 
		"value" => "ts"
	],
	[
		"label" => "Pinkie Pie",
		"value" => "pp"
	]
];

$resources = [
	'Hay',
	'Bananas',
	'Poop',
	'Phones',
	'Dingo',
];

$card = [
	'card' => [
		//[
			'err'        => false,
			'card_id'        => '1',
			'card_no'   => '123',
			'set'       => 'pool',
			'rarity'    => 'common',
			'name'      => 'Bas ass',
			'cost'      => [
				'Tapped' => true,
				'Hay' => '3'
			],
			'formattedCost'    => '',
			'family'    => 'Hawrsee',
			'species'   => 'Donkey',
			'flavour'    => 'IT BE PONY YO!',
			'offence' => '8',
			'defence' => '10',
			'abilities' => [[
				'ability_id' => '12',
				'name' => 'foo',
				'cost' => '123'
				],
				[
				'ability_id' => '45',
				'name' => 'bar',
				'cost' => '456'
				]
			]
		//]
	]
];

$cards = [
	'cards' => [
			[
			'id'        => '1',
			'card_no'   => '123',
			'set'       => 'pool',
			'rarity'    => 'common',
			'name'      => 'Basass',
			'cost'      => '3 Hay',
			'family'    => 'Hawrsee',
			'species'   => 'Donkey',
			'flavour'    => 'IT BE PONY YO!',
			'abilities' => [
				'foo' => '123',
				'bar' => '456'
			]
		],
		[
			'id'        => '1',
			'card_no'   => '123',
			'set'       => 'pool',
			'rarity'    => 'common',
			'name'      => 'Basass',
			'cost'      => '3 Hay',
			'family'    => 'Hawrsee',
			'species'   => 'Donkey',
			'flavour'    => 'IT BE PONY YO!',
			'abilities' => [
				'foo' => '123',
				'bar' => '456'
			]
		]
	]
];

$sets = [
	[
		'set_id' => '0',
		'name'   => 'pool'
	],
	[
		'set_id' => '1',
		'name'   => 'Cenobyte'
	],
	[
		'set_id' => '2',
		'name'   => 'Decker'
	],
	[
		'set_id' => '3',
		'name'   => 'Fleshtripper'
	],
	[
		'set_id' => '4',
		'name'   => 'Gargoyle'
	],
	[
		'set_id' => '5',
		'name'   => 'Houngan'
	],
	[
		'set_id' => '6',
		'name'   => 'Nomad'
	],
	[
		'set_id' => '7',
		'name'   => 'Prophet'
	],
	[
		'set_id' => '8',
		'name'   => 'Ronin'
	],
	[
		'set_id' => '9',
		'name'   => 'Vampyre'
	]
];

if(isset($_GET['resources']))
	$json = json_encode($resources, JSON_PRETTY_PRINT);

if(isset($_GET['abilities']))
	$json = json_encode($labeledAbilities, JSON_PRETTY_PRINT);

if(isset($_GET['cards']))
	$json = json_encode($cards, JSON_PRETTY_PRINT);

if(isset($_GET['card']))
	$json = json_encode($card, JSON_PRETTY_PRINT);

if(isset($_GET['sets']))
	$json = json_encode($sets, JSON_PRETTY_PRINT);

if(isset($_GET['is_free'])) {
	if($_GET['is_free'] == 420 && $_GET['in_set'] != 'pool')
		$json = json_encode(false, JSON_PRETTY_PRINT);
	else
		$json = json_encode(true, JSON_PRETTY_PRINT);
}

header('Content-type: application/json');
echo $json;
/*
{
	"id":19,
	"from":"clio.gucysmith@pailmountain.xyz",
	"to":"steve@example.com",
	"date":"May 2, 2011",
	"subject":"Your order P815875237 has dispatched",
	"messageContent":"Hi,\u003cbr/\u003e\u003cbr/\u003eTraverser 
		gouffres tapages avec des jeté ravie eau d\u0027oiseaux 
		bateau des nuits sous. Dans mai ouverts plus la. Songer 
		or phosphores par de poissons parfois flammes nos ameres 
		clapotements et triques d\u0027enfants j\u0027ai le de. 
		Bleme bateau éternels et les roulis lâche repeché je 
		monté furieux - arcs-en-ciel sous poeme arbres et. La 
		mers aux j\u0027ai des tout je lenteurs.\u003cbr/\u003e
		\u003cbr/\u003eDes les amour et cieux la yeux de 
		rougeoyant comme subi clabaudeurs les. Des 
		l\u0027horizon gouffres quille des épais et mers coup 
		mer ces jeté ma marais ultramarins.\u003cbr/\u003e
		\u003cbr/\u003eBest wishes,\u003cbr/\u003ePiper Qurosson",
	"folder":"Archive"
}
*/