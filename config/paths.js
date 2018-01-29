const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	appSrc: resolveApp('src'),
	appServer: resolveApp('src/server'),
	appClient: resolveApp('src/client'),
	appStatics: resolveApp('src/server/statics')
}