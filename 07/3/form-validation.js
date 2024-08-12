
        let entries = [];

        function validateForm() {
            let form = document.getElementById('userForm');
            if (!form.checkValidity()) {
                // If the form is invalid, trigger the browser's built-in validation
                form.reportValidity();
                return;
            }

            // Get form elements
            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            let grade = document.getElementById("grade").value;

            // Add entry to the array
            entries.push({ name, age, grade });

            // Clear form inputs
            form.reset();

            // Display results
            displayResults();
        }

        function displayResults() {
            let  resultsDiv = document.getElementById("results");
            if (entries.length === 0) {
                resultsDiv.innerHTML = '<p>No data available.</p>';
                return;
            }

            let tableHtml = `
                <h2>Entries</h2>
                <table border="1">
                    <tr><th>Name</th><th>Age</th><th>Grade</th></tr>
            `;

            entries.forEach(entry => {
                tableHtml += `
                    <tr>
                        <td>${entry.name}</td>
                        <td>${entry.age}</td>
                        <td>${entry.grade}</td>
                    </tr>
                `;
            });

            tableHtml += '</table>';

            resultsDiv.innerHTML = tableHtml;
        }