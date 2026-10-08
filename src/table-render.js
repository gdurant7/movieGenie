const historyTable = document.getElementById('historyTable');
const historyTableBody = historyTable.querySelector('tbody');
const noEntriesMessage = document.getElementById('noEntriesMessage');

/*
const clearAllDataButton = document.getElementById('clearAllDataButton');
*/

const formatDateForDisplay = function (timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-GB', {
        year: '2-digit', month: '2-digit', day: '2-digit'
    });
};

const animatedDisplay = function (isAnimatedCheck) {
    if (isAnimatedCheck) {
        return 'YES';
    } else {
        return 'NO';
    }
};


const createTableRow = function (data){
    const row = document.createElement('tr');

    row.dataset.id = data.id;

    row.innerHTML = `
  <td>${formatDateForDisplay(data.timestamp)}</td>
  <td>${data.title}</td>
  <td>${data.movieRuntime}</td>
  <td>${animatedDisplay(data.animated)}</td>
  <td>${data.movieTone}</td>
  <td>${data.movieStyle}</td>
  <td>${data.moviePlot}</td>
  <td class = "action-cell"> 
  <button class="action-button edit" data-id="${data.id}">Edit</button>
  <button class="action-button delete" data-id="${data.id}">Delete</button>
  </td>`;
    return row;
};


export const renderTable = function (data) {
    historyTableBody.innerHTML = '';

    console.log('Inside renderTable');

    if (data.length === 0){
        historyTable.style.display = 'none'
        noEntriesMessage.style.display = 'block';
        /*
        clearAllDataButton.style.display = 'none';
         */
        return; }
    else {
        historyTable.style.display = 'table';
        noEntriesMessage.style.display = 'none';
        /*
        clearAllDataButton.style.display = 'block';
         */
    }

    const sortedData = [...data].sort(function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
    })

    for (const entry of sortedData){
        console.log(`${entry}`);

        const rowElement = createTableRow(entry);
        historyTableBody.appendChild(rowElement);
    }


};