(function( window ){

var template = (function( ){

var template = function( vars ){
    return new template.fn.init( vars );
},
    rKey = /{([^$]+)}/gi;

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
            for ( var key in this.vars ){
                var reKey = new RegExp( "{(?:[\s]+|)(" + key + ")(?:[^}]+|)}", "gim" ),
                    i = 0;

                for ( ; i < t.length; i++ ){
                    if ( t[i].tagName.toLowerCase() == "style" ) continue;

                    var obj = t[i];
                    var ctx = radup.trim( radup( obj ).text() );
                    if ( reKey.test( ctx ) ){
                        console.log( reKey.exec( ctx ) );
                        var val = this.vars[ radup.trim( reKey.exec( ctx )[1] ) ];
                        var ret = ctx.replace( reKey, val );

                        if ( obj.tagName.toLowerCase() == "title" ){
                            document.title = ret;
                        }
                        else {
                            radup( obj ).html( ret );
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
