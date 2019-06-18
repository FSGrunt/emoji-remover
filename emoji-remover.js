// Version 0.0.1-alpha

var ranges = [
    '\ud83d[\ude00-\udeff]',
    '\ud83d[\udc00-\udcff]',
    '\ud83c[\udf00-\udff]'
];

function removeEmojis(value){
    value = value.replace(new RegExp(ranges.join('|'), 'g'), '')

    return value;
}