'use strict';

import {imagesCollection} from "./cards/images.js";
import {renderCards} from "./cards/renderCards.js";
import {removeCards} from "./cards/removeCards.js";
import {showTab} from "./tabs/showTab.js";
import {hideTab} from "./tabs/hideTab.js";
import {setActiveFeedback} from "./carousel/setActiveFeedback.js";
import {setActiveAvatar} from "./carousel/setActiveAvatar.js";

//services variables
const tabs = document.querySelectorAll('.tabs__item');
const tabsDescription = document.querySelectorAll('.tabs__description');
const tabsList = document.querySelector('.tabs__list');
const triangles = document.querySelectorAll('.triangle');

//work variables
const workTabs = document.querySelectorAll('.work__tabs-item');
const workTabList = document.querySelector('.work__tabs-list');
const flipcardWrapper = document.querySelector('.flipcard-wrapper');
const button = document.querySelector('.work__button');

//Feedback variables
const nextFeedbackBtn = document.querySelector('.carousel__arrow.next');
const prevFeedbackBtn = document.querySelector('.carousel__arrow.prev');
const feedbackElements = document.querySelectorAll('.slider__item');
const avatarElements = document.querySelectorAll('.carousel_item');
let feedbackIndex = 0;

//Best Images variables
const container = document.querySelector('.best-images__gallery');
let msnry;

imagesLoaded( container, function() {
    msnry = new Masonry( container, {
        itemSelector: '.best-images__photo',
        columnWidth: 378,
        gutter: 10,
        containerStyle: null,
    });
});


//FUNCTIONS

function changeNextFeedback() {
    if (feedbackIndex === feedbackElements.length - 1) {
        feedbackIndex = 0;
        setActiveFeedback(feedbackIndex, feedbackElements);
        setActiveAvatar(feedbackIndex, avatarElements);
    } else {
        feedbackIndex++;
        setActiveFeedback(feedbackIndex, feedbackElements);
        setActiveAvatar(feedbackIndex, avatarElements);
    }
}

function changePrevFeedback() {
    if (feedbackIndex === 0) {
        feedbackIndex = feedbackElements.length - 1;
        setActiveFeedback(feedbackIndex, feedbackElements);
        setActiveAvatar(feedbackIndex, avatarElements);
    } else {
        feedbackIndex--;
        setActiveFeedback(feedbackIndex, feedbackElements);
        setActiveAvatar(feedbackIndex, avatarElements);
    }
}


//LISTENERS

//services tabs
tabsList.addEventListener('click', event => {
    if (event.target.classList.contains('tabs__item')) {
        let activeTabAttr = event.target.getAttribute('data-tab');
        tabsDescription.forEach((item, index) => {
            let activeTabDescriptionAttr = item.getAttribute('data-tab-content')
            if (activeTabAttr === activeTabDescriptionAttr) {
                hideTab(tabs, tabsDescription, triangles);
                showTab(tabs, tabsDescription, index, triangles);
            }
        })
    }
});


//work tabs
workTabList.addEventListener('click', event => {
    let categoryName = event.target.getAttribute('data-tab');
    if (event.target.classList.contains('work__tabs-item')) {
        removeCards(flipcardWrapper, workTabs);
        button.classList.add('hide');
        event.target.classList.add('active');
        renderCards(flipcardWrapper, imagesCollection, categoryName)
    }
    if (categoryName === 'All' && event.target.classList.contains('work__tabs-item')) {
        button.classList.remove('hide');
    }
});

button.addEventListener('click', event => {
    event.preventDefault();
    button.textContent = '';
    button.classList.add('loader');
    setTimeout(() => {
        flipcardWrapper.classList.remove('hide');
        button.remove();
    }, 2000)
})


//feedback carousel
nextFeedbackBtn.addEventListener('click', changeNextFeedback);
prevFeedbackBtn.addEventListener('click', changePrevFeedback);

avatarElements.forEach((avatar, avatarIndex) => {
    avatar.addEventListener('click', () => {
        feedbackIndex = avatarIndex;
        setActiveFeedback(feedbackIndex, feedbackElements);
        setActiveAvatar(feedbackIndex, avatarElements);
    })
})


renderCards(flipcardWrapper, imagesCollection, 'All')









