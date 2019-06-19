// Version 0.0.1-alpha

var ranges = [
    '\ud83d[\ude00-\udeff]',
    '\ud83d[\udc00-\udcff]',
    '\ud83c[\udf00-\udfff]',
    '\u23f0',
    '\u270b',
    '\u270a',
    '\ud83d[\udd00-\uddff]',
    '\u23f3',
    '\u23f1\ufe0f',
    '\u23f2\ufe0f',
    '\u2728',
    '\ud83c\udccf',
    '\u26ce',
    '\u23e9',
    '\u23ed[\ufe00-\ufeff]',
    '\u23ef\ufe0f',
    '\u23ea',
    '\u23ee\ufe0f',
    '\u23eb',
    '\u23ec',
    '\u2705',
    '\u274c',
    '\u274e',
    '\u2795',
    '\u2796',
    '\u2797',
    '\u27b0',
    '\u27bf',
    '\u2753',
    '\u2754',
    '\u2755',
    '\ud83c[\udd00-\uddff]',
    '\ud83c[\ude00-\udeff]',
    '\u23f8[\ufe00-\ufeff]',
    '\u23f9\ufe0f',
    '\u23fa\ufe0f',
    '\ud83e[\udd00-\uddff]'

];

function removeEmojis(value){
    value = value.replace(new RegExp(ranges.join('|'), 'g'), '')

    return value;
}