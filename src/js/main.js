requirejs.config({
	baseUrl: '/js/lib',
	paths: {
		app: '../app',
//		davis: '../../vendor/davis.min',
		//viewmodel: '../viewmodel',
		mapping: 'knockout.mapping'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
//		'davis': {
//			deps: ['jquery'],
//			exports: 'Davis'
//		},
		'typeahead': {
			deps: ['jquery']
		}
	}
});

// Start the main app logic.  visibility:hidden
//requirejs(['jquery', 'application', 'knockout', 'mapping', 'bootstrap', 'typeahead', 'domReady!'],
//function   ($, viewModel, ko, mapping) {

requirejs(['app/application', 'jquery'],
function   (application, $) {
	fapp = new application();
	fapp.init();
//	app.run();
	$(document).ready(function() {
		$("#loader").remove();
		$("#wrapper").replaceWith($("#wrapper").contents());
	});
});
/*
<input type="text" class="control-label form-control typeahead" placeholder="Ability" data-bind="value: name">

<span class="twitter-typeahead" style="position: relative; display: inline-block;">
	<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled="" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; background-attachment: scroll; background-clip: border-box; background-color: rgb(255, 255, 255); background-image: none; background-origin: padding-box; background-size: auto; background-position: 0% 0%; background-repeat: repeat repeat;">
	<input type="text" class="control-label form-control typeahead tt-query" placeholder="Ability" data-bind="value: name" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
	<span style="position: absolute; left: -9999px; visibility: hidden; white-space: nowrap; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></span>
	<span class="tt-dropdown-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"></span>
</span>

<span class="twitter-typeahead" style="position: relative; display: inline-block; direction: ltr;">
	<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled="" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; background-attachment: scroll; background-clip: border-box; background-color: rgb(255, 255, 255); background-image: none; background-origin: padding-box; background-size: auto; background-position: 0% 0%; background-repeat: repeat repeat;">
	<input type="text" class="control-label form-control typeahead tt-query" placeholder="Ability" data-bind="value: name" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
	<span style="position: absolute; left: -9999px; visibility: hidden; white-space: nowrap; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;">a</span>
	<span class="tt-dropdown-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: block; right: auto;">
		<div class="tt-dataset-abilities">
			<span class="tt-suggestions" style="display: block;">
				<div class="tt-suggestion tt-is-under-cursor" style="white-space: nowrap; cursor: pointer;">
					<p style="white-space: normal;">Applejack</p>
				</div>
			</span>
		</div>
	</span>
</span>

<span class="twitter-typeahead" style="position: relative; display: inline-block; direction: ltr;">
	<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled="" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; background-attachment: scroll; background-clip: border-box; background-color: rgb(255, 255, 255); background-image: none; background-origin: padding-box; background-size: auto; background-position: 0% 0%; background-repeat: repeat repeat;">
	<input type="text" class="control-label form-control typeahead tt-query" placeholder="Ability" data-bind="value: name" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
	<span style="position: absolute; left: -9999px; visibility: hidden; white-space: nowrap; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;">Applejack</span>
	<span class="tt-dropdown-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none; right: auto;">
		<div class="tt-dataset-abilities" style="display: block;">
			<span class="tt-suggestions" style="display: block;">
				<div class="tt-suggestion" style="white-space: nowrap; cursor: pointer;">
					<p style="white-space: normal;">Applejack</p>
				</div>
			</span>
		</div>
	</span>
</span>
*/