if (document.getElementsByClassName("code-expandContent").length) {
	const codeContent = document.getElementsByClassName("code-expandContent");
	var blockCode = document.getElementsByClassName("bbCodeBlock-expandLink"),
		i = 0;
	while (blockCode.length > 0) {
		blockCode[0].remove();
		codeContent[i] ? codeContent[i++].removeAttribute("style") : i++;
		blockCode = document.getElementsByClassName("bbCodeBlock-expandLink");
	}
	console.log(
		"%cUnlock Code Success!!!",
		"color: lightgreen; font-size: 20px;"
	);
}
