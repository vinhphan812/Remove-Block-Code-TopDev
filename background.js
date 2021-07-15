const topDev = /^https:\/\/topdev.vn\/blog/i;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (topDev.test(tab.url))
		if (changeInfo.status == "complete") {
			console.log(`%c Detection TopDev => ${tabId}`, "color: #5477c0");
			removeBlockCode(tabId);
		}
});

function removeBlockCode(tabId) {
	console.log(
		`%c Seen Script Remove Block Code => ${tabId}`,
		"color: #f9f391"
	);
	chrome.tabs.executeScript(null, {
		file: "removeBlockCode.js",
	});
}
