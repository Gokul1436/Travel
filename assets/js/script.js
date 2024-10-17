var text = "Enjoy";
var input = $("#print-text");

setTimeout(startTyping, 1000, input, text);

function startTyping(input, text) {
	for (var i = 0; i < text.length; i++) {
		setTimeout(addText, 120 * i, input, text.charAt(i));
	}
}

function addText(i, c) {
	if (c !== "-") i.text(i.text() + c);
} 

