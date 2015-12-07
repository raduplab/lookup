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
                    vals = /^{(.*)}$/.exec( radup( t[i] ).text().trim() )[1];
                    for ( key in this.vars ){
                        if ( key == vals && t[i]..tagName != "TITLE" )
                            radup( t[i] ).html( radup( t[i] ).text().replace( (new RegExp( "({" + vals + "})" )), this.vars[ vals ] )  );
                        else if ( key == vals )
                            document.title = this.vals[ vals ];
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
