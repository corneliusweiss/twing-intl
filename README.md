# Twing Intl
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

Draft for twing Intl support see[Intl.php](https://github.com/twigphp/Twig-extensions/blob/master/lib/Twig/Extensions/Extension/Intl.php)

## TODO

* what about timezone support? - skip // inclue other lib?
* implement localizednumber
* implement localizedcurrency

## Example

Twig:
```twig
{{ datefield|localizeddate('full', 'short', app.request.locale ) }}
```

## Usage

```javascript
import { TwingLoaderFilesystem, TwingEnvironment } from "twing";
import { TwingExtensionIntl } from "twing-intl";

const loader = new TwingLoaderFilesystem('/path/to/templates');
const twing = new TwingEnvironment(loader);

twing.addExtension(new TwingExtensionIntl());
twing.addGlobal('app', {request: {locale: 'en'}});
```

## Twing

Read the [Twing Documentation](http://ericmorand.github.io/twing) for more information.

## Contributing

* Fork this repository
* Code
* Implement tests using [tape](https://github.com/substack/tape)
* Issue a pull request keeping in mind that all pull requests must reference an issue in the issue queue

## Thanks To

- [Eric MORAND](https://github.com/ericmorand) for his effort to create [Twing](https://www.npmjs.com/package/twing)
- [Nathan Kelly](https://github.com/nedkelly) for [twing-markdown](https://github.com/nedkelly/twing-markdown) my skeleton for this extension
- [Andy VanWagoner](https://github.com/vanwagonet) for [format-message](https://github.com/format-message/format-message)


## License

Copyright © 2019 [Cornelius Weiss](https://github.com/corneliusweiss). Released under the [2-Clause BSD License](https://github.com/corneliusweiss/twing-intl/blob/master/LICENSE).

[npm-image]: https://badge.fury.io/js/twing-intl.svg
[npm-url]: https://npmjs.org/package/twing-intl
[travis-image]: https://travis-ci.org/corneliusweiss/twing-intl.svg?branch=master
[travis-url]: https://travis-ci.org/corneliusweiss/twing-intl
[coveralls-image]: https://coveralls.io/repos/github/corneliusweiss/twing-intl/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/corneliusweiss/twing-intl?branch=master
