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
        this.vars = vars;
    },
    vars: {},
    render: function( html ){
        html = html || "*";

        if ( html == "*" ){
            var t = document.getElementsByTagName( "*" );
            for ( var i=0; i < t.length; i++ ){
                if ( /^{(.*)}$/.test( radup( t[i] ).text().trim() ) ){
                    tKey = /^{(.*)}$/.exec( radup( t[i] ).text().trim() )[1];
                    for ( key in this.vars ){
                        if ( key == radup.trim( tKey ) ){
                            var obj = t[i], val = this.vars[ tKey ];
                            var ret = radup( obj ).text().replace( (new RegExp( "({" + tKey + "})" )), val );
                            if ( obj.tagName.toLowerCase() == "title" ){
                                document.title = ret;
                            }
                            else{
                                radup( obj ).html( ret );
                            }
                        }
                    }
                }
            }
        }
    }
};
template.fn.init.prototype = template.fn;

return template;
})();

window.template = template;

})(window)
