const path = require('path');
const expect = require('chai').expect;

findFilePath = (filename) => {
    const realFilename = filename
                        .replace('.test.', '.')
                        .replace(/test[\/|\\]/, '');
    return realFilename;
};

module.exports = {
    __basedir: path.basename(__dirname),
    findFilePath,
    expect,
};
