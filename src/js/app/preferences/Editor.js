define([
		'preferences/Editor.opt'
	], function(option) {

		var config = option.toJSON();

		var EditorTabView = Backbone.View.extend({
			el: '#editor-tab',

			events: {
				'change select[name=theme]': 'changeTheme',
				'click input[name=displayLineNumber]': 'displayLineNumber',
				'click input[name=vimKeyBinding]': 'vimKeyBinding',
				'click input[name=insertFourSpace]': 'insertFourSpace',
				'click input[name=autoPairCharacters]': 'autoPairCharacters'
			},

			initialize: function() {
				this.$el.find('select[name=theme]').select2().select2("val", config.theme);
				
				this.$el.find('input[name=displayLineNumber]').prop('checked', config.displayLineNumber);
				this.$el.find('input[name=vimKeyBinding]').prop('checked', config.vimKeyBinding);
				this.$el.find('input[name=insertFourSpace]').prop('checked', config.insertFourSpace);
				this.$el.find('input[name=autoPairCharacters]').prop('checked', config.autoPairCharacters);
			},

			changeTheme: function(e) {
				option.set({ theme: e.val });
			},

			displayLineNumber: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('displayLineNumber', bool);
			},

			vimKeyBinding: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('vimKeyBinding', bool);
			},

			insertFourSpace: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('insertFourSpace', bool);
			},

			autoPairCharacters: function(e) {
				var bool = $(e.target).is(':checked');
				option.set('autoPairCharacters', bool);
			}
		});

		return EditorTabView;

});