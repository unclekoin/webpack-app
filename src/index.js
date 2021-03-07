import React from 'react';
import { render } from 'react-dom';
import AppService from './modules/app.service';
import { config } from './modules/config';
import './modules/header.component';
import './modules/ts.module';
import './css/index.css';
import './less/index.less';
import './sass/index.scss';
import App from './components/App';

console.log('Config key:', config.key);

const service = new AppService('Hello, World');

service.log();

render(<App />, document.getElementById('root'));