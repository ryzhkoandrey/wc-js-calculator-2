function updateResultsView(results) {
   document.querySelector('#total-percent').innerText = results.rate * 100 + '%';
}

export default updateResultsView;