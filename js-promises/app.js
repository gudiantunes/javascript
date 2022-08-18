
// Criando promise

const myPromisse = new Promise((resolve, reject) => {
    
    const nome = 'Gudi';

    if (nome == 'Gudi') {
        resolve('Gudinho encontrado');
    } else {
        reject('Usuário errado');
    }
});

myPromisse.then(data => {
    console.log(data)
});

// Encadeamento de then

const myPromisse2 = new Promise((resolve, reject) => {
    
    const nome = 'Gudi';

    if (nome == 'Gudi') {
        resolve('Gudinho encontrado');
    } else {
        reject('Usuário errado');
    }
});

myPromisse2.then(data => {
    return data.toLowerCase();
}).then((str)=>{
    console.log(str)
})

// Tratando reject

const myPromisse3 = new Promise((resolve, reject) => {
    
    const nome = 'Cleber';

    if (nome == 'Gudi') {
        resolve('Gudinho encontrado');
    } else {
        reject('Usuário errado');
    }
});

myPromisse3.then(data => {
    console.log(data)
}).catch((err) => {
    console.log('Erro a ser tratado: ' + err)
})

// Resolver varias promises

const p1 = new Promise((resolve, reject) => {
    resolve('p1 ok')
})

const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok')
})

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data=>{
    console.log(data)
}))

// Fetch APi ==> buscando usuário do github

const user = 'matheusbattisti';

fetch(`https://api.github.com/users/${user}/repos`, {
    method: 'GET',
    headers: {
        Accept: `application/vnd.github.v3+json`
    }
}).then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log(data)
    const cont = document.querySelector('#content');
    const repos = data.map((repo) => {
        return repo['name']
    });
    let str = '';
    for (let r in repos) {
        str += repos[r];
        str += '<br>'
    }

    cont.innerHTML = str

})