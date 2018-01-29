import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import paths from '../../config/paths';

import HTML from './HTML';
import App from '../client/components/App';

const app = express();

app.use('/', express.static(paths.appStatics));

app.use('*', (req, res) => {
	const content = renderToString(<App/>);

	res.send(renderToString(<HTML content={content}/>));
})

module.exports = app;