const share_btn = document.querySelector('.share-btn');
const share = document.querySelector('.share');
const path = share_btn.querySelector('path');
const bottom = document.querySelector('.bottom');

share_btn.addEventListener('click', () => {
    share_btn.style.fill = 'white';
    share.style.display = 'flex';
    share_btn.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
    path.style.fill = 'white';
    bottom.style.margin = '0 0 0.6em';
})

