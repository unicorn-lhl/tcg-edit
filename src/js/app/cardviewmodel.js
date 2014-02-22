//$('.combobox').combobox();
/*
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js"></script>
    <script src="js/knockout-2.3.0.js"></script>
    <script src="js/knockout.mapping.js"></script>
    <script src="js/knockout-jquery-ui-widget.js"></script>
    <!--
*/
define(['jquery', 'knockout', 'mapping', 'domReady'], 
function($, ko, mapping, domReady) {

	return function cardViewModel(card_id) {
		console.log(card_id);
		var self = this;
		

//		self.card_id = ko.observable();
		self.card_no = ko.observable();
		self.set = ko.observable();
//		self.rarity = ko.observable();
//		self.name = ko.observable();
//		self.cost = ko.observable();
//		self.formattedCost = ko.observable();
//		self.family = ko.observable();
//		self.species = ko.observable();
//		self.flavour = ko.observable();
//		self.offence = ko.observable();
//		self.defence = ko.observable();
		self.err = ko.observable();

		self.abilities = ko.observableArray();
	//	self.cards = ko.observableArray(),
		console.log(self.abilities);
		self.addAbility = function() {
			self.abilities.push({
				'ability_id': ko.observable(), 
				'name': ko.observable(), 
				'cost': ko.observable()
			});
		};
		self.remAbility = function(ability) {
			self.abilities.remove(ability);
		};
		self.incOffence = function() { 
			self.offence(parseInt(self.offence(), 10) + 1);
		};
		self.decOffence = function() {
			self.offence(parseInt(self.offence(), 10) - 1);
		};
		self.incDefence = function() {
			self.defence(parseInt(self.defence(), 10) + 1);
		};
		self.decDefence = function() {
			self.defence(parseInt(self.defence(), 10) - 1);
		};

		self.err.card_no = ko.observable(false);
		var card_no_error = function() {
			$.getJSON('/api/kernel.php', {
				is_free: self.card_no(), 
				in_set: self.set() 
			}, function(data) {
				self.err.card_no(!data);
			});
		};
		self.card_no.subscribe(card_no_error);
		self.set.subscribe(card_no_error);
/*
			card_no: ko.computed(function() {
				var free;
				$.getJSON('./kernel.php', {
						is_free: self.card_no(), 
						in_set: self.set() 
					}, function(data) {
						free = data;
				});
				//return !free;
				console.log(free);
				return true;
			})
		};
*/

	//	return self;
	};
});