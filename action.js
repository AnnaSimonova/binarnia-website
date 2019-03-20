"use strict";

const bodyBlock = document.querySelector('body');
const headerBlock = document.querySelector('header');
const mainBlock = document.querySelector('main');
const footerBlock = document.querySelector('footer');
const gridBlocks = document.querySelectorAll('main div');

document.body.onload = function() {
    popupBlockDescription();
};

function popupBlockDescription() {
    let popupHeight = mainBlock.clientHeight + footerBlock.clientHeight * 0.75;
    gridBlocks.forEach(function(item) {
        item.addEventListener('click', function() {
            let blockTitle = item.querySelector('.block_title').innerHTML;
            let blockSubtitle = item.querySelector('.block_subtitle');
            let blockDescr = item.querySelector('.block_descr');

            let modal = document.createElement('div');
            modal.setAttribute('class', 'pop-up');
            modal.setAttribute('style', 'height:' + popupHeight + 'px');

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
            headerBlock.classList.add('blurred');
            mainBlock.classList.add('blurred');
            footerBlock.classList.add('blurred');
        });
    });
}

function hidePopup() {
    let modal = document.querySelector('.pop-up');
    bodyBlock.removeChild(modal);
    headerBlock.classList.remove('blurred');
    mainBlock.classList.remove('blurred');
    footerBlock.classList.remove('blurred');
}