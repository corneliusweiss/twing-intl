import { TwingExtension, TwingFilter, TwingEnvironment } from 'twing';
import * as formats from 'format-message-formats';

export class TwingExtensionIntl extends TwingExtension {

    constructor (content: string) {
        super();
        if (!Intl.DateTimeFormat) {
            throw new Error('intl (https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) is needed to use intl-based filters.')
        }
    }

    getFilters () {
        return [
            new TwingFilter('localizeddate', TwingExtensionIntl.localizeddate, [
                { name: 'date' },
                { name: 'dateFormat' },
                { name: 'timeFormat' },
                { name: 'locale'},
                { name: 'timezone'},
                { name: 'format'},
                { name: 'calendar'}
            ]),
            // new TwingFilter('localizednumber', TwingExtensionIntl.localizednumber),
            // new TwingFilter('localizedcurrency', TwingExtensionIntl.localizedcurrency)
        ];
    }

    static getLocale (locale: string) {
        return locale ? locale : navigator.language;
    }

    // we need some help as js intl is not yet ready
    // @see https://github.com/tc39/proposal-intl-datetime-style
    static localizeddate (date: Date, dateFormat: string = 'medium', timeFormat: string = 'medium', locale: string = null, timezone: string = null, format: string = null, calendar: string = 'gregorian') {
        var options = {};

        if (timezone) {
            Object.assign(options, {
                timeZone: timezone,
                timeZoneName: 'short'
            });
        }

        if (dateFormat) {
            Object.assign(options,
                formats.date[dateFormat] || formats.parseDatePattern(dateFormat) || formats.date.default);
        }

        if (timeFormat) {
            Object.assign(options,
                formats.time[timeFormat] || formats.parseDatePattern(timeFormat) || formats.time.default);
        }
        return Promise.resolve(new Intl.DateTimeFormat(TwingExtensionIntl.getLocale(locale), options).format(date));
    }

    static localizednumber (number: Number, style: string = 'decimal', type: string = 'default', locale: string = null) {
        // @TODO implement me
    }

    static localizedcurrency (number: Number, $currency: string = null, $locale: string = null) {
        // @TODO implement me
    }

}
