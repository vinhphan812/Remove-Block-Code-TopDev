const topDev = /^https:\/\/topdev.vn\/blog/i;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status == "complete") {
		console.log(tab);
		if (topDev.test(tab.url)) {
			removeBlockCode();
		}
	}
});

function removeBlockCode() {
	chrome.tabs.executeScript(null, {
		file: "removeBlockCode.js",
	});
	console.log("remove complete!!!");
}
