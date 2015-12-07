(function(){

var getUserAgent =function( ){
    var userAgent = navigator.userAgent;

    var system = /(windows|linux|mac)/i.exec( userAgent );
    var mobile = /(ipad|iphone|windows\sphone|android)/i.exec( userAgent );
    var edge = /(edge\/[^\s]+)/i.exec( userAgent );
    var browser = edge == null ? /(msie|chrome\/[^\s]+|safari|opera|firefox)/i.exec( userAgent ) : edge;

    sys = system != null ? system[1] : "";
    mb = mobile != null ? mobile[1] : "";
    bw = browser != null ? browser[1]: "";

    onsys = mb == "" ? sys : mb;

    return "You're using " + bw + " on " + onsys + ".";
}

var temp = {
    "title": "IP lookup",
    "user-agent": getUserAgent()
};

radup( window ).load(function(){
    template( temp ).render( "*" );
});

})();
