# Uses

Import the modules by name, not by the file path, simple JavaScript file and module loader.

[![npm version](https://badge.fury.io/js/uses-js.svg)](https://badge.fury.io/js/uses-js) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation:

```shell
$ npm install --save uses-js
```

#### Example usage

This is a simple example of usage the lib.

```js
require('uses-js'); //require in any JS file to get `use` reference

const LocalModule = use('project-name/module-name');

const NodeModule = use('module-name');
```

## Changelog

All notable changes to this project will be documented here.

#### [0.1.0] - 2020-07-26

    Initial release.

## License

[MIT](https://github.com/rodgeraraujo/usejs/blob/master/LICENSE)

---

<div align="center">
  <p>
    <sub>Built with ❤︎ by
      <a href="https://github.com/rodgeraraujo">Rogério Araújo</a>
    </sub>
  </p>
</div>
