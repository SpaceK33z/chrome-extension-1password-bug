const el3 = document.createElement('a');
el3.textContent = 'Open Side Panel (click) | ';
el3.addEventListener('click', (event) => {
    chrome.runtime.sendMessage({ type: 'OPEN' });
}, true);
document.body.appendChild(el3);

const el2 = document.createElement('a');
el2.textContent = 'Open Side Panel (pointerdown) | ';
el2.addEventListener('pointerdown', (event) => {
    event.preventDefault(); // <- this is crucial
    chrome.runtime.sendMessage({ type: 'OPEN' });
}, true);
document.body.appendChild(el2);

const el = document.createElement('a');
el.textContent = 'Open Side Panel (pointerup)';
el.addEventListener('pointerup', (event) => {
    event.preventDefault();
    chrome.runtime.sendMessage({ type: 'OPEN' });
}, true);
document.body.appendChild(el);

