"use strict";

const htmlBlock = document.querySelector('html');
const bodyBlock = document.querySelector('body');
const mainContainer = document.querySelector('.main_container');
const footer = document.querySelector('footer');
const gridBlocks = document.querySelectorAll('main > *:not(.portfolio):not(.who_we_are)');
const modalBlock = document.querySelector('.modal');
const cursorDefault = document.querySelector('.cursor_outer');
const cursorHover = document.querySelector('.cursor_inner');

document.body.onload = function() {
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        document.querySelector('main').style = "padding-bottom: 130px";
        footer.style = "bottom:-5px; height: 85px";
    }

    gridBlocks.forEach(function(item) {
        if (window.location.hash === item.dataset.hash) {
            popupBlockDescription(item);
        }
    });
    gridBlocks.forEach(function(item) {
        item.addEventListener('click', function() {
            window.location.hash = item.dataset.hash;
            popupBlockDescription(item);
        });
    });

    window.onmousemove = (e) => mouseCoordinates(e);
};

function popupBlockDescription(item) {
    let blockTitle = item.querySelector('.block_title').innerHTML;
    let blockSubtitle = item.querySelector('.block_subtitle');
    let blockDescr = item.querySelector('.block_descr');

    modalBlock.querySelector(".block_title").innerHTML = blockTitle;
    modalBlock.querySelector(".block_subtitle").innerHTML = blockSubtitle ? blockSubtitle.innerHTML : "";
    modalBlock.querySelector(".block_descr").innerHTML = blockDescr ? blockDescr.innerHTML : "";

    modalBlock.style.display = "block";
    htmlBlock.style.overflowY = 'hidden';
    htmlBlock.style.position = 'fixed';
    bodyBlock.style.overflowY = 'scroll';
    mainContainer.classList.add('blurred');
    footer.classList.add('blurred');
}

function hidePopup() {
    history.pushState("", document.title, window.location.pathname);
    modalBlock.classList.add('modal_up');
    setTimeout(function() {
        modalBlock.style.display = "none";
        mainContainer.classList.remove('blurred');
        footer.classList.remove('blurred');
        htmlBlock.style.overflowY = 'auto';
        htmlBlock.style.position = 'inherit';
        bodyBlock.style.overflowY = 'visible';
    }, 100);
    setTimeout(function() {
        modalBlock.classList.remove('modal_up');
    }, 200);
}


// Mouse pointer
function mouseCoordinates(e) {
    let targetElem = event.target;
    cursorDefault.style.left = (e.pageX - 25) + 'px';
    cursorDefault.style.top = (e.pageY - 25) + 'px';

    if (targetElem.classList.contains("cursor_links_hover") ||
        (targetElem.classList.contains("swiper-pagination-bullet") && !targetElem.classList.contains("swiper-pagination-bullet-active"))) {
        cursorHover.classList.add("links_hover");
        cursorDefault.classList.add("is_transparent");
    } else if (targetElem.classList.contains("cursor_content_hover")) {
        cursorHover.classList.add("content_hover");
        cursorDefault.classList.add("content_hover_inner");
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

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});