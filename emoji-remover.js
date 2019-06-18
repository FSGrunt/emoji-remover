// Version 0.0.1-alpha

var ranges = [
    '\ud83d[\ude00-\udeff]',
    '\ud83d[\udc00-\udcff]',
    '\ud83c[\udf00-\udfff]'
];

function removeEmojis(value){
    value = value.replace(new RegExp(ranges.join('|'), 'g'), '')

    return value;
}

function findSurrogatePair(point) {
    // assumes point > 0xffff
    var offset = point - 0x10000,
        lead = 0xd800 + (offset >> 10),
        trail = 0xdc00 + (offset & 0x3ff);
    return [lead.toString(16), trail.toString(16)];
}
