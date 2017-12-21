const path = require('path');

findFilePath = (filename) => {
    const realFilename = filename.replace('.test.', '.').replace(/test[\/|\\]/, '');
    return realFilename;
};

console.log(findFilePath(__filename));

module.exports = {
    __basedir: path.basename(__dirname),
    findFilePath,
};
