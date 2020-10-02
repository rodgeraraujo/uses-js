# Uses

Import the modules by name, not by the file path, simple JavaScript file and module loader.

[![npm version](https://badge.fury.io/js/uses-js.svg)](https://badge.fury.io/js/uses-js) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Installation

npm:

```shell
$ npm i uses-js
```

yarn:

```shell
$ yarn add uses-js
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

#### [0.1.1] - 2020-07-26

    Added, a contributing guide file;
    Updated the README, added `contributing` section;

## Contributing

If you want to contribute to the project and make it better, feel free to fork and contribute after reading the [CONTRIBUTING.md](https://github.com/rodgeraraujo/uses-js/blob/master/CONTRIBUTING.md) file.

## License

Licensed under the [MIT](https://github.com/rodgeraraujo/usejs/blob/master/LICENSE) license.

## Author 👽

Made with ❤ by [Rogério Araújo](https://github.com/rodgeraraujo)
