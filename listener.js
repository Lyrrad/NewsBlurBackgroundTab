/**
 *

 @author Darryl Tam

 Thanks to Aaron Saray's FeedlyBackgroundTab extension for informaton on how to implement this.

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

/**
 * This will open up a new background tab with the url passed
 */
chrome.runtime.onMessage.addListener(
  function(message) {
    chrome.tabs.query({ active: true, currentWindow: true },
      function(current_tab) {
        var options = { url: message.url, active: false };
        if (current_tab && current_tab[0] && current_tab[0].index) {
          options['index'] = current_tab[0].index + 1;
        } else {
          options['index'] = 1;
        }
        chrome.tabs.create(options);
      }
    );
  }
);
