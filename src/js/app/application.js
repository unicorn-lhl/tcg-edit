define(['jquery', 'app/cardviewmodel', 'app/cardsviewmodel', 'knockout', 'mapping', 'davis', 'app/objsort', 'bootstrap', 'typeahead', 'domReady!'],
function   ($, cardViewModel, cardsViewModel, ko, mapping, Davis, objsort) {
return  function application() {

	this.run = function() {
//		ko.applyBindings(viewModel);
	};
	this.init = function() {
//	this.run = function() {
		var self = this;

		$(document).ajaxSend(function(event, request, settings) {
			$('#loading-indicator').show();
		});

		$(document).ajaxComplete(function(event, request, settings) {
			$('#loading-indicator').hide();
		});
		var viewModel = {
			card: new cardViewModel(),
//			cards: new cardsViewModel(),
//			abilities: ko.observable()
		};
		viewModel.cards = ko.observableArray();
		viewModel.abilities = ko.observable();
		viewModel.editCard = ko.observable();
		viewModel.newCard = ko.observable();
		viewModel.listCards = ko.observable();
	/*
	*/

		viewModel.sortOrder = ko.observable("ASC");
		viewModel.sortField = ko.observable("id");

		self.toggleSort = function() {
			if(viewModel.sortOrder() === "ASC") {
				viewModel.sortOrder("DESC");
			} else if(viewModel.sortOrder() === "DESC") {
				viewModel.sortOrder("ASC");
			}
		};

		self.sortCards = function(a, b) {
			if($.isNumeric(a[viewModel.sortField()]()) && 
				$.isNumeric(b[viewModel.sortField()]())) {
				a = parseInt(a[viewModel.sortField()](),10);
				b = parseInt(b[viewModel.sortField()](),10);
			} else {
				a = a[viewModel.sortField()]();
				b = b[viewModel.sortField()]();
			}

			if (a == b) {
				return 0;
			} else {
				if(viewModel.sortOrder() == 'ASC') {
					if (a < b) {
						return -1;
					} else {
						return 1;
					}
				} else {
					if (a > b) {
						return -1;
					} else {
						return 1;
					}
				}
			}
		};

		viewModel.sortByField = function(field) {
			if(viewModel.sortField() === field)
				self.toggleSort();
			else 
				viewModel.sortField(field);

//storeContracts.sort(cbSortBy.getValue(), 'ASC');

			viewModel.cards.sort(self.sortCards);
		};

		ko.bindingHandlers.typeahead = {
			init: function(element, valueAccessor) {
				$(element).typeahead(valueAccessor());
				return 'foo';
			},
			update: function(element, valueAccessor) {

			}
		};

		ko.bindingHandlers.sort = {
			init: function(element, valueAccessor){
				console.log(valueAccessor());
			}
		};

		$.getJSON('/api/kernel.php', {abilities:true}, function(data) {
			viewModel.abilities = ko.observableArray(data);
		});
		
		viewModel.testThing = function(element, index, data) {
			console.log('element: ');console.log(element);
			console.log('index: ');console.log(index);
			console.log('data: ');console.log(data);
		};

		viewModel.nope = function() {
			alert('Not yet implemented.\nSorry about that');
		};

		self.getCard = function(id) {
			$.getJSON('/api/', {card:true}, function(data) {
				mapping.fromJS(data, {}, viewModel.card);
			}).done(function() {
				viewModel.editCard(true);
				viewModel.listCards(null);
			});
		};

		self.getCards = function() {
			$.getJSON('/api/', {cards:true}, function(data) {
				mapping.fromJS(data, {}, viewModel.cards);
				console.log(viewModel.cards);
			}).done(function() {
				viewModel.listCards(true);
				viewModel.editCard(null);
			});
		};

		viewModel.gotoCard = function(card) {
			//history.pushState({foo: "bar"},"foobar", "/" + card);
			//history.pushState({},"", "/card/edit/1");
			console.log(card.id());
			Davis.location.assign(new Davis.Request('/card/edit/1'));
			//Davis.location.assign(new Davis.Request('/card/edit/' + card.id()));
		};

		self.getWelcome = function() {
			viewModel.listCards(null);
			viewModel.editCard(null);
		};

		var router = Davis(function () {
			console.log('router running');
			this.configure(function() {
				this.generateRequestOnPageLoad = true;
			});
	//		this.scope('/floofwars', function() {


				this.get('/cards', function () {
					console.log('/cards invoked');
					self.getCards();
				});

				this.get('/card/edit/:id', function (req) {
					console.log('/card/edit/'+req.params.id+' invoked');
					self.getCard(req.params.id);
				});

				this.get('/card/new', function () {
					console.log('/card/new invoked');
					//viewModel.editCard(req.params['id']);
				});

				this.get('/', function () { 
					self.getWelcome();
				});

	//		});
		});


		$(document).ready(function() {
			ko.applyBindings(viewModel);
		});
	};
//	return this;
};});
