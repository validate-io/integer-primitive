/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isInteger = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-integer-primitive', function tests() {

	it( 'should export a function', function test() {
		expect( isInteger ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isInteger( 3 );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			new Number( 5 ),
			'5',
			Math.PI,
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isInteger( value );
		}
	});

});
