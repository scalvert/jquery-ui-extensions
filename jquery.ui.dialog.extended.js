
(function($, undefined) {

$.extend($.ui.dialog.prototype, {
	button: function(index) {
		var buttonPane = this.uiDialog.find('.ui-dialog-buttonpane');

		if (buttonPane.length) {
			return buttonPane.find('.ui-button').eq(index);
		}
	}
});

})(jQuery);