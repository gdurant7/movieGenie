import * as decision from "./decision.js";
import * as formHandler from './form-handler.js';
import * as dataStore from './data-store.js';
import * as tableRender from './table-render.js';
import * as renderDecision from "./ui.js";


console.log('App Loaded');

let movieArray = dataStore.getFromLS();

const formElement = document.getElementById("movieForm");
const clearFormElement = document.getElementById("clearFormButton");
const clearAllDataButton = document.getElementById("clearAllDataButton");

/*
let isConfirmingResetAll = false;
let resetAllTimeoutID = null;
 */

const handleFormSubmit = function (event){
    event.preventDefault();
    const formData = formHandler.getFormInputs();
    const movie = decision.calculateMovieScores(formData);

    const newEntry ={
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...formData,
        ...movie,
    };
    movieArray.push(newEntry);
    dataStore.saveToLS(movieArray);
    console.log(movieArray);

    renderDecision.renderDecision(newEntry);
    tableRender.renderTable(movieArray);

    formHandler.clearForm();

    console.log("Movie Array:", movieArray);
    console.log("Recommendation list:", movie);
    resetAllUIStates();
};

const handleClearForm = function (){
    formHandler.clearForm();

    console.log('Form Cleared');
};

const resetAllButtons = function () {
    console.log(resetAllTimeoutID);
    if (resetAllTimeoutID) {
        clearTimeout(resetAllTimeoutID); }

    /*
    isConfirmingResetAll = false;
    clearAllDataButton.textContent = 'Clear All Data';
    clearAllDataButton.classList.remove('danger-button');
    clearAllDataButton.classList.remove('confirm-state');
    clearAllDataButton.classList.add('danger-button');
     */

};

const resetAllUIStates = function (){
    resetAllButtons();
};


/*
const performClearAllData = function () {

    movieArray.length = 0;
    dataStore.clearAllEntries();
    tableRender.renderTable(movieArray);
    console.log("In-memory array cleared:", movieArray);
    formHandler.clearForm();
    renderDecision.hideResults();
    resetAllUIStates();
};
*/

const init = function (){
    formElement.addEventListener("submit", handleFormSubmit);
    clearFormElement.addEventListener("click", handleClearForm);

/*    clearAllDataButton.addEventListener('click', function (event){
        event.stopPropagation();
        if(isConfirmingResetAll) {
            performClearAllData(); }
        else {
            isConfirmingResetAll = true;
            clearAllDataButton.textContent = 'Are you sure? Click again';
            clearAllDataButton.classList.add('confirm-state');
            resetAllTimeoutID = setTimeout(function (){
                resetAllButtons();
                console.log('Clear All confirmation timed out');
            }, 3000); // 3 seconds
        }

    }); */
    tableRender.renderTable(movieArray);
};

document.addEventListener("DOMContentLoaded", init);

