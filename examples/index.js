'use strict';

var isInteger = require( './../lib' );

console.log( isInteger( 3 ) );
// returns true

console.log( isInteger( Math.PI ) );
// returns false

console.log( isInteger( NaN ) );
// returns false

console.log( isInteger( new Number( 5 ) ) );
// returns false

console.log( isInteger( '5' ) );
// returns false
