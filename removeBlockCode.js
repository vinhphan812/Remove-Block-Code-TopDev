if (document.getElementsByClassName("code-expandContent").length) {
	const codeContent = document.getElementsByClassName("code-expandContent"),
		blockCode = document.getElementsByClassName("bbCodeBlock-expandLink");

	for (var i = 0; i < codeContent.length; i++) {
		codeContent[i].removeAttribute("style");
		blockCode[i - i].remove();
	}
}
