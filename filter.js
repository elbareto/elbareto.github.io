filterSelection("all-filter", "all");

function filterSelection(filterButtonId, filterClass) {
    if (filterClass == "all") {
        filterClass = "";
    } 

    var filterButtons = document.getElementsByClassName("filter-chip");
    for (let i = 0; i<filterButtons.length; i++) {
        deactivateChip(filterButtons[i]);

        if (filterButtons[i].id == filterButtonId) {
            activateChip(filterButtons[i]);
        }
    }

    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    var filterDivs = document.getElementsByClassName("filter");
    for (let i = 0; i < filterDivs.length; i++) {
        hideElement(filterDivs[i]);
      
        if (filterDivs[i].className.indexOf(filterClass) > -1) {
            showElement(filterDivs[i]);
        }
    }
}

// Show filtered elements
function showElement(element) {
    element.classList.add("show");
    
}

// Hide elements that are not selected
function hideElement(element) {
    element.classList.remove("show");
}


// Add active class to the current control button (highlight it)
function activateChip(element) {
    element.classList.add("active");
}

// Remove active class to the current control button
function deactivateChip(element) {
    element.classList.remove("active");
}