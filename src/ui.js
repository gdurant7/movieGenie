const resultsContainer = document.getElementById('decisionObj')

const movieTitleDisplay = resultsContainer.querySelector('#movieTitle');
const movieRuntimeDisplay = resultsContainer.querySelector('#movieRuntime');
const animatedDisplay = resultsContainer.querySelector('#animatedDisplay');
const movieToneDisplay = resultsContainer.querySelector('#movieTone');
const movieStyleDisplay = resultsContainer.querySelector('#movieStyle');
const moviePlot = resultsContainer.querySelector('#moviePlot');


export const renderDecision = function (decisionObj) {
    resultsContainer.style.display = 'block';

    movieTitleDisplay.textContent = `Title: ${decisionObj.title}`;
    movieRuntimeDisplay.textContent = `Runtime: ${decisionObj.movieRuntime}`;
    animatedDisplay.textContent =  `Animated ${decisionObj.animated}`;
    movieToneDisplay.textContent = `Genre: ${decisionObj.movieTone}`;
    movieStyleDisplay.textContent = `Genre: ${decisionObj.movieStyle}`;
    moviePlot.textContent = `Plot: ${decisionObj.moviePlot}`;

};

export const hideResults = function () {
    resultsContainer.style.display = 'none';
};