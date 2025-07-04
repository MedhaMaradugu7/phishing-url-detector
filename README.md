#Phishing Detector Extension


#Overview
This is a Chrome extension designed to detect potentially suspicious URLs using heuristic analysis. It warns users about possible phishing attempts by analyzing URL patterns and domains.

#Features

Scans the current webpage URL for suspicious patterns.
Alerts users if a URL is deemed potentially malicious.
Provides a popup interface to manually scan the active tab.

#Installation

Clone or download this repository.
Open Chrome and go to chrome://extensions/.
Enable "Developer mode" in the top right.
Click "Load unpacked" and select the extension folder.
The Phishing Detector icon should appear in your toolbar.

#Usage

The extension automatically checks URLs as you browse.
Click the extension icon to open the popup and manually scan the current tab.
A warning will appear if a suspicious URL is detected.

#Files

background.js: Manages tab updates and injects content script.
content.js: Contains the logic to analyze URLs.
manifest.json: Defines the extension's metadata and permissions.
popup.js: Handles popup button actions.
popup.html: The popup user interface.
style.css: Styles for the popup.

#Contributing
Feel free to fork this repository and submit pull requests for improvements or bug fixes.
#License
This project is open-source. See the LICENSE file for more details (if applicable).
