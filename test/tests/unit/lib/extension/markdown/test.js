const { TwingExtensionIntl } = require('../../../../../../build/index');
const tap = require('tape');

tap.test('extension/intl', function (test) {
    let extension = new TwingExtensionIntl();

    test.test('en-US::long::short', function (test) {
        extension.getFilters();

        let filter = extension.getFilters().get(0);
        let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
        // filter.setArguments([{}, new Date(), 'short', 'long', 'de']);

        test.same(filter.getCallable()({}, date, 'long', 'short', 'en-US'), 'December 20, 2012, 4:00 AM');

        test.end();
    });

    test.test('de-DE::long::short', function (test) {
        extension.getFilters();

        let filter = extension.getFilters().get(0);
        let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
        // filter.setArguments([{}, new Date(), 'short', 'long', 'de']);

        // test.same(filter.getCallable()({}, date, 'full', 'short', 'de-DE'), 'Di., 20. Dezember 2012 16:00');

        // @see https://nodejs.org/api/intl.html#intl_embed_a_limited_set_of_icu_data_small_icu
        test.same(filter.getCallable()({}, date, 'full', 'short', 'de-DE'), '2012 M12 20, Thu 04:00');

        test.end();
    });

    test.end();
});