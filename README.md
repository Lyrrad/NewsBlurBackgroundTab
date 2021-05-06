BackgroundTab for NewsBlur
==========================

Now licensed under GPL Version 3 and available in the Chrome Web Store:
https://chrome.google.com/webstore/detail/background-tab-for-newsbl/ieeimmkgocgaaabphkgjdkophaejfnlk/

New in 0.4.1:

  * Add support for beta.newsblur.com (Thanks @doofusdavid)
  * Migrated from deprecated chrome.extension to chrome.runtime (Thanks @jscher2000)

New in 0.4.0: 

* Able to override Newsblur hotkeys (default "o" and "v"). (Thanks to Gary Pandergast (@pento) for showing how this can be done and submitting a pull request)
* Added support for multiple hotkeys.
* Changed to local storage instead of using Chrome Sync to store extension settings.


New in 0.3.0: Added customizable hotkey support.



This Chrome extension allows you to open the currently selected story in NewsBlur in a background tab by pressing a defined hotkey (default "o" and "v").

Note: This extension was previously obsolete, with Newsblur implementing a function to open links in the background.

However, Chrome 41 broke Newsblur's implemnentation.  This version was released to the Stable channel in March 2015.

See https://github.com/samuelclay/NewsBlur/issues/655 for details on this issue.


To Install:
1) Download files and put into a directory
2) Go to chrome://extensions
3) Enable Developer mode
4) Select "Load Unpacked Extension..."
5) Select the directory.

It should then be installed.

TODO:
- ~~Get feedback about international versions~~
- ~~Add customizable hotkey~~
- Determine if regular "o" hotkey can be overridden.
- ~~Distribute the crx file.~~

Notes:

Contributors:

* Gary Pandergast (@pento)
* Marc-Antoine Courteau (@macourteau)
* Randy (@TheQwerty)
* Mirco Macrelli (@mircomacrelli)


Icon based off of:

 * Decorative Sun Icon from https://openclipart.org/detail/3367/ivak-Decorative-Sun-by-ivak (public domain)
 * Tango Tab New from https://openclipart.org/detail/34297/tab-new-by-warszawianka (public domain)

Contact:

contact AT darryltam.com
