# Webpack

```bash
$ npm init
# or
$ npm int -y
```

```bash
$ npm install --save-dev webpack
# or specific version
npm install --save-dev webpack@<version>
```

```bash
$ npm install --save-dev webpack-cli
```

- create a folders `src` and `dist` at the root of the project
- create a file `index.js` at the folder `src`
- create a file `webpack.config.js` at the root of the project

```bash
$ npx webpack
```

- file `bundle.js` appeared in the `dist` folder

```bash
# for test
$ npx webpack --mode development
# file bundle.js will be change
```

```js
// package.json
  "scripts": {
    "dev": "webpack --mode development",
    "dev:watch": "webpack --mode development --watch",
    "build": "webpack --mode production"
  },
```

```bash
# for run
$ npm run dev
# or
$ npm run dev:watch
# or
$ npm run build
```
***
## Modules

```js
// config.js
export const config = {
  ...
}
```

```js
// app.service.js
export default class AppService {
  constructor(text) {
    this.text = text;
  }

  log() {
   ...
}
```
```js 
// header.component.js
const header = ...;
```
```js
// index.js
import { config } from './modules/config';
import AppService from './modules/app.service';
import './modules/header.component';
```
***

## Plugins

### HtmlWebpackPlugin
```bash
$ npm install --save-dev html-webpack-plugin
```
```js
// wabpack.config.js
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  ...
}

```

add file `index.html` at the folder `src` and create basic layout without `script` elements

## Libraries
### JQuery

```bash
$ npm install --save jquery
```

```js
// file-name.js
import $ from 'jquery';

$( ... )
```