const share_btn = document.querySelector('.share-btn');
const share = document.querySelector('.share');
const path = share_btn.querySelector('path');
const bottom = document.querySelector('.bottom');

share_btn.addEventListener('click', () => {
    if (!share.classList.contains('active')) {
        share.classList.add('active');
        share_btn.style.backgroundColor = 'var(--Desaturated-Dark-Blue)';
        path.style.fill = 'white';
        // bottom.style.margin = '0 0 0.6em';
    } else {
        share.classList.remove('active');
        path.style.fill = 'var(--Desaturated-Dark-Blue';
        share_btn.style.backgroundColor = 'var(--Light-Grayish-Blue)';
    }
})

