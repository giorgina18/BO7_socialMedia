let pageNumber = 1;
let pageSize = 10;

const userContainer= document.querySelector(".user__container")
const renderUser = (user) => {
    let { name: { first, last },
        location: { country },
        email,
        picture: { medium: userImage },
    } = user;
    let htmStr = `
  <div class="user">
                    <div class="logo">
                        <img class="user-logo" src="${userImage}" alt="user">
                    </div>
                    <div class="user-gebruiker">
                    <div class="user-name">${first} ${last}</div>
                    <div class="user-country">${country}</div>
                    <div class="user-email">${email}</div>
                </div>
                </div>`
};

function getRandomUsers(pageNumber, pageSize) {
    let url = `https://randomuser.me/api/?page=1&results=10&seed=abc`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.results);
        });
};

getRandomUsers(pageNumber, pageSize);