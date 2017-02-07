# xedos-animator

[![Build Status](https://travis-ci.org/xedoken/xedos-animator.png?branch=master)](https://travis-ci.org/xedoken/xedos-animator)

plugin project for animate elements

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'xedos-animator';
```

### CommonJS use

Use `require` to load `xedos-animator` and everything else
needed to create a template that uses `xedos-animator`:

```js
var plugin = require("xedos-animator");
```

## AMD use

Configure the `can` and `jquery` paths and the `xedos-animator` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'xedos-animator',
		    	location: 'node_modules/xedos-animator/dist/amd',
		    	main: 'lib/xedos-animator'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/xedos-animator/dist/global/xedos-animator.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
