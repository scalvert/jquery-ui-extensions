
(function($, undefined) {

$.extend($.ui.button.prototype, {
    loading: function() {
        this._checkForInvalidType();
        this._setOption('icons', {primary: 'ui-icon-loading'});
    },
    stopLoading: function(original) {
        this._checkForInvalidType();
        this._setOption('icons', {primary: original || ''});
    },
    success: function() {
        this._checkForInvalidType();
        this._setOption('icons', {primary: 'ui-icon-success'});
    },
    error: function() {
        this._checkForInvalidType();
        this._setOption('icons', {primary: 'ui-icon-error'});
    },
    
    _checkForInvalidType: function() {
    	if (this.element.get(0).nodeName.toLowerCase() === 'input') { throw 'Button loading indicators do not work on elements of type input. Try swapping to use a <button>.'; }
    }
});

})(jQuery);