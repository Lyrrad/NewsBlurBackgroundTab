/**
 * 

 @author Darryl Tam

 Thanks to Aaron Saray's FeedlyBackgroundTab extension for informaton on how to implement this.
 */

/**
 * This will open up a new background tab with the url passed
 */
chrome.extension.onMessage.addListener(
  function(itemURL) {
		chrome.tabs.create({ url: itemURL.url, active: false });
	}
);
