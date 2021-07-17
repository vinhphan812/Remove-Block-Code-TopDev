if (document.getElementsByClassName("code-expandContent").length) {
	const codeContent = document.getElementsByClassName("code-expandContent"),
		blockCode = document.getElementsByClassName("bbCodeBlock-expandLink");
	let i = 0;

	while (blockCode.length > 0) {
		blockCode[0].remove();
		codeContent[i] ? codeContent[i++].removeAttribute("style") : i;
	}
	console.log(
		"%c 🚀 TopDev - Remove Block Code Extension",
		"color: #d4edda; font-family: sans-serif; font-size: 16px;"
	);
	console.log(
		`%c \t\t🔓 Unlock ${i} block`,
		"color: #fff3cd; font-family: sans-serif;"
	);
}
