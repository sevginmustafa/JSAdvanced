class Contact {
    constructor(fName, lName, phone, email) {
        this.fName = fName;
        this.lName = lName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if (this.divTitle) {
            if (!value) {
                this.divTitle.classList.remove('online');
            }
            else {
                this.divTitle.classList.add('online');
            }
        }

        this._online = value
    }

    render(id) {
        const element = document.getElementById(id);

        const divInfo = document.createElement('div');
        divInfo.classList.add('info');
        const spanPhone = document.createElement('span');
        spanPhone.textContent = `\u260E ${this.phone}`;
        const spanEmail = document.createElement('span');
        spanEmail.textContent = `\u2709 ${this.email}`;
        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail);
        divInfo.style.display = 'none';

        this.divTitle = document.createElement('div');
        this.divTitle.classList.add('title');
        this.divTitle.textContent = this.fName + ' ' + this.lName;

        if (this._online) {
            this.divTitle.classList.add('online');
        }

        const button = document.createElement('button');
        button.textContent = '\u2139';
        this.divTitle.appendChild(button);
        button.addEventListener('click', () => {
            if (divInfo.style.display == 'block') {
                divInfo.style.display = 'none';
            }
            else {
                divInfo.style.display = 'block';
            }
        });

        const article = document.createElement('article');
        article.appendChild(this.divTitle);
        article.appendChild(divInfo);

        element.appendChild(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
