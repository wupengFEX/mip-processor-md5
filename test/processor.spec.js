var Processor = require('../index');
var Processor = require('path');

describe("MD5 Process", function () {
    it("generate md5", function (done) {
    	processor.md5({
            baseUrl: path.resolve(__dirname, 'test-md5'),
            domain: "",
            exts: ['.js'],
            paths: [
                './'
            ],
            outputDir: path.resolve(__dirname, 'tmp')
        });
    	expect(fs.existsSync(path.resolve(__dirname, 'tmp'))).to.be.true;
    }
}