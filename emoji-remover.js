// Version 0.0.1-alpha

var ranges = [
    '\ud83c[\udf00-\udfff]' // U+1F300 to U+1F3FF
];

function removeEmojis(value){
    value = value.replace(new RegExp(ranges.join('|'), 'g'), '')

    return value;
}
