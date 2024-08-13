//avoid duplicates
let studentNames = new Set();

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    // get input
    let studentName = document.getElementById('studentName').value;
    let studentGrade = document.getElementById('studentGrade').value;

    // Validate input
    if (validateForm(studentName, studentGrade)) {
        addStudent(studentName, studentGrade);
        document.getElementById('studentForm').reset();
    }

    //  prevent the default form submission behavior
    return false;
}

// Validate  input and display errors
function validateForm(name, grade) {
    let nameError = document.getElementById('nameError');
    let gradeError = document.getElementById('gradeError');
    let isValid = true;

    nameError.textContent = '';
    gradeError.textContent = '';

    if (name === '') {
        nameError.textContent = 'Name cannot be empty.';
        isValid = false;
    } else if (studentNames.has(name.toLowerCase())) {
        nameError.textContent = 'Name already exists.';
        isValid = false;
    }

    if (isNaN(grade) || grade < 0 || grade > 100) {
        gradeError.textContent = 'Grade must be a number between 0 and 100.';
        isValid = false;
    }

    if (grade === '') { // Check if the grade is an empty string
        gradeError.textContent = 'Grade cannot be empty.';
        isValid = false;
    } else if (isNaN(grade) || grade < 0 || grade > 100) {
        gradeError.textContent = 'Grade must be a number between 0 and 100.';
        isValid = false;
    }
    return isValid;
}

// Add new student
function addStudent(name, grade) {
    let studentTable = document.getElementById('studentTable').querySelector('tbody');
    let row = studentTable.insertRow();
    let cellName = row.insertCell(0);
    let cellGrade = row.insertCell(1);
    let cellAction = row.insertCell(2);


    cellName.textContent = name;
    cellGrade.textContent = grade;

    let deleteButton = createDeleteButton(row, name);
    cellAction.appendChild(deleteButton);

    studentNames.add(name.toLowerCase());
}

// Create a delete button for each student row
function createDeleteButton(row, name) {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.className = 'action-button';
    deleteButton.onclick = () => {
        row.parentNode.removeChild(row);
        studentNames.delete(name.toLowerCase());
    };
    return deleteButton;
}


// Update table to apply filtering and sorting
function updateTable() {
    let studentTable = document.getElementById('studentTable').querySelector('tbody');
    let filterValue = document.getElementById('filterSelect').value;
    let sortValue = document.getElementById('sortSelect').value;
    let rows = Array.from(studentTable.rows);

    filterRows(rows, filterValue);
    sortRows(rows, sortValue);

    // Append rows back to the table to reflect changes
    rows.forEach(row => studentTable.appendChild(row));
}

// Filter rows 
function filterRows(rows, filterValue) {
    rows.forEach(row => {
        let grade = row.cells[1].textContent;
        row.style.display = (filterValue === 'all' ||
            (filterValue === 'failed' && grade < 60) ||
            (filterValue === 'success' && grade >= 60)) ? '' : 'none';
    });
}

// Sort rows based on selected criteria
function sortRows(rows, sortValue) {
    const sortFunctions = {
        name: (a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent),
        grade: (a, b) =>a.cells[1].textContent - b.cells[1].textContent,
    };

    rows.sort(sortFunctions[sortValue]);
}
