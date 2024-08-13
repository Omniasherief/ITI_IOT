// Select the table body element
let tableBody = document.querySelector('#usersTable tbody');

function fetchAndDisplayUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                //  new row
                let row = document.createElement('tr');

                // Username
                let usernameCell = document.createElement('td');
                usernameCell.textContent = user.username;
                row.appendChild(usernameCell);

                // Email
                let emailCell = document.createElement('td');
                emailCell.textContent = user.email;
                row.appendChild(emailCell);

                // Company Name
                let companyNameCell = document.createElement('td');
                companyNameCell.textContent = user.company.name;
                row.appendChild(companyNameCell);

                // Address GeoLocation
                let geoLocationCell = document.createElement('td');
                geoLocationCell.innerHTML = `<strong>Lat:</strong> ${user.address.geo.lat}<br><strong>Lng:</strong> ${user.address.geo.lng}`;
                row.appendChild(geoLocationCell);


                // Posts Titles
                let postsCell = document.createElement('td');
                let postsList = document.createElement('ul');

                //  user's posts
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        posts.forEach(post => {
                            let postItem = document.createElement('li');
                            postItem.textContent = post.title;
                            postsList.appendChild(postItem);
                        });
                    });

                postsCell.appendChild(postsList);
                row.appendChild(postsCell);

                // Add the row to the table
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}


fetchAndDisplayUserData();
