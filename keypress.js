/**

 @author Darryl Tam

 Thanks to Aaron Saray's FeedlyBackgroundTab extension (http://aaronsaray.com) for informaton on how to implement this.
 */
(function(){

  var NewsBlurBackgroundTab = function() {

		var hotkey = 59; // ";" key on keyboard


		this.keyPressHandler = function(e) {
			if ( e.keyCode == hotkey && (!e.shiftKey && !e.metaKey && !e.altKey && !e.ctrlKey) ) {
				var popover = document.getElementsByClassName("NB-popover"); // Ignore if popup to add a new feed is visible
				elems = document.getElementsByClassName("NB-story-title NB-selected");
				if ( (popover.length == 0) && elems.length) {
					var elems2 = elems.item(0).getElementsByClassName("story_title")
					if (elems2.length) {
						chrome.extension.sendMessage({url: elems2.item(0).href});
					}
				}
		
			}
		}
	};

	if (window == top) {
		var nbt = new NewsBlurBackgroundTab();
		window.addEventListener('keypress', nbt.keyPressHandler, false);
	}
})();
