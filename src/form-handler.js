//dom references

const movieForm = document.getElementById('movieForm');
const moodTypeRadios = movieForm.querySelectorAll('input[name="moodType"]');
const maxRuntimeInput = movieForm.querySelector('#maxRuntime');
const isAnimatedInput = movieForm.querySelector('#animated');
const movieToneRadios = movieForm.querySelectorAll('input[name="movieTone"]');
const movieStyleRadios = movieForm.querySelectorAll('input[name="movieStyle"]');

const getSelectedRadioValue = function ( radioButtons){
    for (const radio of radioButtons){
        if(radio.checked){
            console.log(`${radio.value} has attribute of ${radio.checked}`)
            return radio.value;
        }
    }
    return null;
};

export const getFormInputs = function (){

    return{
        moodType: getSelectedRadioValue(moodTypeRadios),
        movieRuntime: parseInt(maxRuntimeInput.value),
        animated: isAnimatedInput.checked,
        movieTone: getSelectedRadioValue(movieToneRadios),
        movieStyle: getSelectedRadioValue(movieStyleRadios)
    };

};

export const clearForm = function() {
    movieForm.reset();
    maxRuntimeInput.value = 0;
    moodTypeRadios[0].checked = true;
    movieToneRadios[0].checked = true;
    movieStyleRadios[0].checked = true;
    console.log('Form cleared')
}