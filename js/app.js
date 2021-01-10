const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.614f90a7b313d789";
const client_secret = "e494e49552f6f4a57e5ea782e8ae77d9464cabfe";

const fethchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data }
};

const showData = () => {
    fethchUsers(inputValue.value).then((result) => {
        console.log(result);

        nameContainer.innerHTML = `Name: <span class="main__profile-value">${result.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value">${result.data.login}</span>`;
        reposContainer.innerHTML = `Repos: <span class="main__profile-value">${result.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <span class="main__profile-value">${result.data.html_url}</span>`;
    });
};