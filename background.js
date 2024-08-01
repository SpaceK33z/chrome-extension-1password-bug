console.log('Background loaded');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('onMessage', request)
    switch (request.type) {
        case 'OPEN':
            const windowId = sender.tab.windowId;
            if (!windowId) {
                throw Error('No windowId set');
            }
            chrome.sidePanel.open({ windowId });
            return;
    }
});