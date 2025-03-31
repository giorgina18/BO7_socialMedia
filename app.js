let pageNumber = 1;
let pageSize = 10;

const renderUser = (user) => {
    let htmStr = `
  <div class="user">
                    <div class="logo">
                        <img class="user-logo" src="img/foto1.jpg" alt="user">
                    </div>
                    <div class="user-gebruiker">
                    <div class="user-name">John Smith</div>
                    <div class="user-country">Engeland</div>
                    <div class="user-email">john.smith@gmail.com</div>
                </div>
                </div>`
}

function getRandomUsers(pageNumber, pageSize) {
    let url = `https://randomuser.me/api/?page=1&results=10&seed=abc`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.results);
        });
}

getRandomUsers(pageNumber, pageSize);