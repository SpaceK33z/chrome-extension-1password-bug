const el = document.createElement('a');

el.textContent = 'Open Side Panel';
el.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'OPEN' });
});

document.body.appendChild(el);