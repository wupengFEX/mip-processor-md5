mip-processor-md5
===========

MIP Processor For LESS Compile

<a href="https://circleci.com/gh/wupengFEX/mip-processor-md5/tree/master"><img src="https://img.shields.io/circleci/project/mipengine/mip-processor-less/master.svg?style=flat-square" alt="Build Status"></a>

MIP Processor For File MD5

### usage

```
var Processor = require('mip-processor-md5');
Processor.md5({
	baseUrl: '',
	domain: '',
	exts: ['.jpg'...],
	paths: [
	    './src/',
	    ...
	],
	outputDir: ''
});
```