(function( window ){

var template = (function( ){

var template = function( vars ){
    return new template.fn.init( vars );
};

template.fn = template.prototype = {
    init: function( vars ){
        if ( typeof( vars ) != "object" ){
            return null;
        }

        
    }
}

return template;
})();

})(window)
