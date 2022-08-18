
// Get all objects

const nameText = document.querySelector('#username');
const showusername = document.querySelector('h2 > a');
const search = document.querySelector('#search');
const repoList = document.querySelector('#repo-list');
const loading = document.querySelector('#loading');

// Empty variable of username
let username = '';

// Set username clicking in button

search.addEventListener('click', () => {
    if (nameText.value) {
        username = nameText.value;
        // showusername.innerText = username;
        loading.classList.remove('hide');
        getUserLink()
        cleanList();
        updateList();
    }
});

// Clean repository list

function cleanList() {
    repoList.innerHTML = '';
}

// Update list using github api

function updateList() {
    fetch(`https://api.github.com/users/${username}/repos`, {
        method: 'GET',
        headers: {
            Accept: `application/vnd.github.v3+json`
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                loading.innerText = 'No Repos';
            }
        })
        .then((data) => {
            if (data) {
                for (repo in data) {
                    addRepo(data[repo]);
                    loading.classList.add('hide')
                }
            }
        })
}

// Get user link

function getUserLink() {
    fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
            Accept: `application/vnd.github.v3+json`
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Invalid User')
            }
        })
        .then((data) => {
            if (data) {
                console.log(data)
                showusername.setAttribute('href', data.html_url);
                showusername.innerHTML = data.name;
                if (!data.name) {
                    showusername.innerHTML = data.login;
                }
            }
        })
        .catch((err) => {
            showusername.innerHTML = 'User not found';
        })
}

// Add repository to the list

function addRepo(repo) {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    const aa = document.createElement('a');
    const hr = document.createElement('hr');

    // dt.innerText = repo['name'];
    aa.innerText = repo['name'];
    dt.appendChild(aa);
    dd.innerText = repo['description']

    aa.setAttribute('href', repo['html_url']);
    aa.setAttribute('target', '_blank');

    repoList.appendChild(dt);
    repoList.appendChild(dd);
    repoList.appendChild(hr);
}