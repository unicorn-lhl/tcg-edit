define({
	nameAsc: function(a,b) {
		if (a.name() < b.name())
			return -1;
		if (a.name() > b.name())
			return 1;
		return 0;
	},
	nameDesc: function(a,b) {
		if (a.name() < b.name())
			return -1;
		if (a.name() > b.name())
			return 1;
		return 0;
	},
	idAsc: function(a,b) {
		if (a.id() < b.id())
			return -1;
		if (a.id() > b.id())
			return 1;
		return 0;
	},
	idDesc: function(a,b) {
		if (a.id() < b.id())
			return -1;
		if (a.id() > b.id())
			return 1;
		return 0;
	},
	noAsc: function(a,b) {
		if (a.card_no() < b.card_no())
			return -1;
		if (a.card_no() > b.card_no())
			return 1;
		return 0;
	},
	noDesc: function(a,b) {
		if (a.card_no() < b.card_no())
			return -1;
		if (a.card_no() > b.card_no())
			return 1;
		return 0;
	},
	typeAsc: function(a,b) {
		if (a.type() < b.type())
			return -1;
		if (a.type() > b.type())
			return 1;
		return 0;
	},
	typeDesc: function(a,b) {
		if (a.type() < b.type())
			return -1;
		if (a.type() > b.type())
			return 1;
		return 0;
	},
	setAsc: function(a,b) {
		if (a.set() < b.set())
			return -1;
		if (a.set() > b.set())
			return 1;
		return 0;
	},
	setDesc: function(a,b) {
		if (a.set() < b.set())
			return -1;
		if (a.set() > b.set())
			return 1;
		return 0;
	},
});
