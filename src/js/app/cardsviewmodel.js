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

	return function cardsViewModel() {
		var self = this;
		self.card_no = ko.observable();
		self.set = ko.observable();
		self.err = ko.observable();
		self.sortOrder = ko.observable("Asc");
		self.sortField = ko.observable("id");

		self.sortAsc = function(a,b) {
			if (a[self.sortField()] < b[self.sortField()])
				return -1;
			if (a[self.sortField()] > b[self.sortField()])
				return 1;
			return 0;
		};
		self.sortDesc = function(a,b) {
			if (a[self.sortField()] > b[self.sortField()])
				return -1;
			if (a[self.sortField()] < b[self.sortField()])
				return 1;
			return 0;
		};

		self.sortByName = function() {
			if(self.sortOrder() === "Asc") {
				self.sortOrder("Desc");
			} else if(self.sortOrder() === "Desc") {
				self.sortOrder("Asc");
			}
			
			self.sort(self['sort' + self.sortOrder()]);
		};
	};
});