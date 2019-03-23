"use strict";

const bodyBlock = document.querySelector('body');
const mainContainer = document.querySelector('.main_container');
const gridBlocks = document.querySelectorAll('main > div');
const overlay = document.querySelector('.overlay');

document.body.onload = function() {
    popupBlockDescription();
};

function popupBlockDescription() {
    gridBlocks.forEach(function(item) {
        item.addEventListener('click', function() {
            let blockTitle = item.querySelector('.block_title').innerHTML;
            let blockSubtitle = item.querySelector('.block_subtitle');
            let blockDescr = item.querySelector('.block_descr');

            let modal = document.createElement('div');
            modal.setAttribute('class', 'pop-up');

            let closeIcon = document.createElement('img');
            closeIcon.setAttribute('src', './images/close_icon.svg');
            closeIcon.setAttribute('class', 'popup-close-btn');
            closeIcon.setAttribute('onclick', 'hidePopup()');
            modal.appendChild(closeIcon);

            let modalTitle = document.createElement('div');
            modalTitle.setAttribute('class', 'block_title');
            modalTitle.innerHTML = blockTitle;
            modal.appendChild(modalTitle);

            if (blockSubtitle) {
                let modalSubtitle = document.createElement('div');
                modalSubtitle.setAttribute('class', 'block_subtitle');
                modalSubtitle.innerHTML = blockSubtitle.innerHTML;
                modal.appendChild(modalSubtitle);
            }

            let hr = document.createElement('hr');
            hr.setAttribute('class', 'hr');
            modal.appendChild(hr);

            if (blockDescr) {
                let modalDescr = document.createElement('div');
                modalDescr.setAttribute('class', 'block_descr');
                modalDescr.innerHTML = blockDescr.innerHTML;
                modal.appendChild(modalDescr);
            }

            bodyBlock.appendChild(modal);
            bodyBlock.style.overflow = 'hidden';
            mainContainer.classList.add('blurred');
            overlay.classList.remove('hidden');
        });
    });
}

function hidePopup() {
    let modal = document.querySelector('.pop-up');
    modal.classList.add('modal_up');
    setTimeout(function(){ bodyBlock.removeChild(modal);
        mainContainer.classList.remove('blurred');
        overlay.classList.add('hidden');
        bodyBlock.style.overflow = 'auto';
    }, 100);
}