emoji-remover
==================================================

This simple javascript parse and replaces emojis in strings.

supported unicodes:
- unicode 10
- unicode 9
- unicode 8
- unicode 7
- unicode 6.1
- unicode 6


Install
--------------------------------------

Just embed the emoji-remover.js
```
<script src="emoji-remover.js" type="text/javascript"></script>
```


Usage
--------------------------------------

Call the function removeEmojis(string). 
```
removeEmojis(string);
```

Return value of the parsed string without emojis.

Example
--------------------------------------

```
var emojis = "Hallo Welt 😀 😁 😂 🤣 😃 😄 😅 😆 🍆 ☻ 😃 🌍 👩‍🎨 🌪️ 🦹‍♂ 🎌 🐝 😩️";

var result = removeEmojis(emojis);

console.log(result);
```