// Version 0.0.1-alpha

var ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
];

function removeEmojis(value){
    value = value.replace(new RegExp(ranges.join('|'), 'g'), '')

    return value;
}
