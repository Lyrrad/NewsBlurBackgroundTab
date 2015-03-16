/**

 @author Darryl Tam

 Thanks to Aaron Saray's FeedlyBackgroundTab extension (http://aaronsaray.com) for informaton on how to implement this.

This file is part of Background Tab for NewsBlur.

    Background Tab for NewsBlur is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Background Tab for NewsBlur is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Background Tab for NewsBlur.  If not, see <http://www.gnu.org/licenses/>.
 */
(function(){

  var NewsBlurBackgroundTab = function() {

		var hotkey;
		chrome.storage.sync.get({
		    savedHotkey: ';'
		  }, function(items) {
		    hotkey = items.savedHotkey.charCodeAt(0);
		  });
		
		this.keyPressHandler = function(e) {
			if ( e.keyCode == hotkey && (!e.metaKey && !e.altKey && !e.ctrlKey) ) {
				var popover = document.querySelectorAll(".NB-popover, .simplemodal-overlay, .NB-overlay"); // Ignore if popups are visible
				var badActiveElement = document.activeElement.nodeName == "TEXTAREA" || document.activeElement.nodeName == "INPUT";
				elems = document.getElementsByClassName("NB-story-title NB-selected");
				if ( (popover.length == 0) && elems.length && badActiveElement == false) {
					var elems2 = elems.item(0).getElementsByClassName("story_title")
					if (elems2.length) {
						e.preventDefault();
						e.stopImmediatePropagation();
						chrome.extension.sendMessage({url: elems2.item(0).href});
					}
				}
		
			}
		}
	};

	if (window == top) {
		var nbt = new NewsBlurBackgroundTab();
		document.body.addEventListener('keypress', nbt.keyPressHandler, false);
	}
})();
