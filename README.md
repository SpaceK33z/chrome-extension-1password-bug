# Chrome Extension 1Password Side Panel Bug

1Password's Chrome Extension interferes with other Chrome Extensions. It seems to always intercept clicks. Chrome has some APIs that can only be triggered as a response to a direct user gesture, and this breaks those APIs.

In our case it breaks the `chrome.sidePanel.open()` API — we can no longer open a side panel from a webpage.

To reproduce:

1. clone this repository (the code is super short so check it!)
2. go to `chrome://extensions` and load an unpacked extension, select this folder
3. make sure your 1Password extension is **disabled**
4. go to https://example.com
5. click on the "Open Side Panel" link at the bottom.
6. observe how it opens the side panel correctly
7. now enable your 1Password extension and refresh the page
8. do step 4-5 again

I can reliably reproduce the side panel no longer opening when the 1Password extension is installed, using v2.26.1 of their extension.
