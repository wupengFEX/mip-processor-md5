/**
 * @file MIP Processor For MD5 Compile
 * @author smart(smartfutureplayer@gmail.com)
 */

var crypto = require('crypto');

/**
 * 按位数生成md5串
 * @param {String|Buffer} data 数据源
 * @param {Number} len 长度
 * @return {String} md5串
 */
exports.md5 = function(data, len) {
    var md5sum = crypto.createHash('md5'),
    encoding = typeof data === 'string' ? 'utf8' : 'binary';
    md5sum.update(data, encoding);
    len = len || 7;
    return md5sum.digest('hex').substring(0, len);
}
