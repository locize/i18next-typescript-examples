import i18next from './i18n';

console.log(i18next.t('ns1:title'));
console.log(i18next.t('title'));
console.log(i18next.t('ns1:description.part1'));
console.log(i18next.t('ns1:description.part2'));
console.log(i18next.t('ns2:description.part2'));
console.log(i18next.t('description.part2', { ns: 'ns2' }));

// interpolation
i18next.t('inter', { val: 'xx' });

// // @ts-expect-error
// i18next.t('inter', { valWrong: 'xx' });

// works because of fallbackNS
i18next.t('fallbackKey')
