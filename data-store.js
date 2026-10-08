const MY_DATA = 'movieArray';

export const saveToLS= function (decisionObj) {
    try {
        localStorage.setItem(MY_DATA, JSON.stringify(decisionObj)); }
    catch (error){
        console.error(`Error Saving Data to localStorage: ${error}`)
    }

};

export const getFromLS = function (){
    try {
        const dataString = localStorage.getItem(MY_DATA);
        if(dataString){
            return JSON.parse(dataString);
        }
        return [];
    }
    catch (e) {
        console.error(`Error loading entries from localStorage: ${e}`);
        localStorage.removeItem(MY_DATA);
    }

};

/*
export const clearAllEntries = function () {
    localStorage.removeItem(MY_DATA);
    console.log('All entries cleared from local storage' );
}
*/
