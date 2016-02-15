/* sass-intro
 *
 * /scripts/scripts.js - Main javascript script
 *
 * coded by leny@flatLand!
 * started at 11/02/2016
 */

( function() {

    "use strict";

    var fFigureClicked;

    fFigureClicked = function( oEvent ) {
        oEvent.preventDefault();

        oEvent.currentTarget
            .querySelector( "img" )
            .setAttribute( "src", "http://api.adorable.io/avatars/125/" + ( new Date() ).getTime() + ".png" );
    };

    window.addEventListener( "load", function() {
        document.querySelector( "figure" ).addEventListener( "click", fFigureClicked );
    } );

} )();
