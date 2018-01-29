import React from 'react';
import PropTypes from 'prop-types';

const HTML = ({ content, preloadedState }) => (
	<html>
		<head>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
			<title>React Universal Starter</title>
		</head>
		<body>
			<div id="root" dangerouslySetInnerHTML={{ __html: content }}></div>
			<script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}` }} />
			<script src="/app.bundle.js"></script>
		</body>
	</html>
);

HTML.propTypes = {
	content: PropTypes.string
};

export default HTML;