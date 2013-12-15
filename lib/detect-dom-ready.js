/*
 * detect-dom-ready
 * http://github.amexpub.com/modules
 *
 * Copyright (c) 2013 Amex Pub. All rights reserved.
 */

'use strict';

module.exports = function(callback){
    // if ( this.readyBound ) {return;}
    // this.readyBound = true;

    if(document.addEventListener){
        document.addEventListener( "DOMContentLoaded", function(){
            //remove listener
            callback();
            return;
        }, false );
    }
    else if(document.attachEvent){
        document.attachEvent("onreadystatechange", function(){
            if ( document.readyState === "complete" ) {
                //remove listener
                callback();
                return;
            }
        });

        if ( document.documentElement.doScroll && window === window.top ){
            try{
                // If IE is used, use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                document.documentElement.doScroll("left");

            }
            catch( error ) {
                callback();
                return;
            }
            // and execute any waiting functions
            callback();
            return;
        }
    }
};