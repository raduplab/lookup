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
                var reKey = new RegExp( "{(?:[\s]+|)(" + key + ")(?:[\s]+|)}", "gim" ),
                    i = 0;

                for ( ; i < t.length; i++ ){
                    var obj = t[i];
                    var ctx = radup.trim( obj.outerHTML );
                    if ( reKey.test( ctx ) ){
                        var val = this.vars[ radup.trim( reKey.exec( ctx )[1] ) ];
                        var ret = ctx.replace( reKey, val );
                        if ( obj.tagName.toLowerCase() == "title" ){
                            ret = radup( obj ).text().replace( reKey, val );
                            document.title = ret;
                        }
                        else {
                            obj.outerHTML = ret;
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
