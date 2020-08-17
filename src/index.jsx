import React from 'react';
import { render } from 'react-dom';
import I18n from 'i18n-js';

import App from 'app/App';
import { generateLogs } from 'utils';

const locale = 'en';
const en = require(`locales/${locale}.json`);
I18n.translations[locale] = en;
I18n.locale = locale;

generateLogs();

render(<App />, document.getElementById('root'));
