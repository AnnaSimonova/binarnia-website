"use strict";

const bodyBlock = document.querySelector('body');
const mainContainer = document.querySelector('.main_container');
const gridBlocks = document.querySelectorAll('main > div');
const cursorDefault = document.querySelector('.cursor_outer');
const cursorHover = document.querySelector('.cursor_inner');

document.body.onload = function() {
    popupBlockDescription();
    window.onmousemove = (e) => mouseCoordinates(e);
    // portfolioSlider();
};

function popupBlockDescription() {
    gridBlocks.forEach(function(item) {
        item.addEventListener('click', function() {
            let blockTitle = item.querySelector('.block_title').innerHTML;
            let blockSubtitle = item.querySelector('.block_subtitle');
            let blockDescr = item.querySelector('.block_descr');

            let modalWrapper = document.createElement('div');
            modalWrapper.setAttribute('class', 'modal');
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

            modalWrapper.appendChild(modal);
            bodyBlock.appendChild(modalWrapper);
            bodyBlock.style.overflow = 'hidden';
            mainContainer.classList.add('blurred');
        });
    });
}

function hidePopup() {
    let modalWrapper = document.querySelector('.modal');
    let modal = document.querySelector('.pop-up');
    modal.classList.add('modal_up');
    modalWrapper.classList.add("hidden");
    setTimeout(function(){ bodyBlock.removeChild(modalWrapper);
        mainContainer.classList.remove('blurred');
        bodyBlock.style.overflow = 'auto';
    }, 100);
}


// Mouse pointer
function mouseCoordinates(e) {
    let targetElem = event.target;
    cursorDefault.style.left = (e.pageX - 25) + 'px';
    cursorDefault.style.top = (e.pageY - 25) + 'px';

    if (targetElem.classList.contains("cursor_links_hover")) {
        cursorHover.classList.add("links_hover");
        cursorDefault.classList.add("is_transparent");
    } else if (targetElem.classList.contains("cursor_content_hover")) {
        cursorHover.classList.add("content_hover");
        cursorDefault.classList.add("content_hover_inner");
    } else if (targetElem.classList.contains("cursor_nav_hover")) {
        cursorHover.classList.add("nav_hover");
        cursorDefault.classList.add("is_transparent");
    } else {
        if (cursorHover.classList.contains("links_hover")) {
            cursorHover.classList.remove("links_hover");
        } else if (cursorHover.classList.contains("nav_hover")) {
            cursorHover.classList.remove("nav_hover");
        } else {
            cursorHover.classList.remove("content_hover");
            cursorDefault.classList.remove("content_hover_inner");
        }
        cursorDefault.classList.remove("is_transparent");
    }
}

// Portfolio slider
var counter = 0;
const projectList = document.querySelectorAll(".portfolio_items > div");
const list = Array.from(projectList);

function portfolioSlider() {
    list.slice()
}