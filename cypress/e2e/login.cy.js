describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восстановить пароль 
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль 
        cy.get('#loginButton').click(); //  нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя 
    })

})



describe('Верный логин и неверный пароль', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восстановить пароль 
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // ввели неверный пароль 
        cy.get('#loginButton').click(); //  нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя 
    })

})


describe('Неверный логин и верный пароль', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восстановить пароль 
        cy.get('#mail').type('germaааn@dolnikov.ru'); // ввели  неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль 
        cy.get('#loginButton').click(); //  нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя 
    })

})

describe('Проверка, что в логине есть @', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восстановить пароль 
        cy.get('#mail').type('germandolnikov.ru'); // ввели  логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль 
        cy.get('#loginButton').click(); //  нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя 
    })

})

describe('Проверку логики восстановления пароля', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восстановить пароль 

        cy.get('#forgotEmailButton').click(); //  нажала кнопку восстановить пароль 
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#restoreEmailButton').click(); // нажала отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст на совпадение 
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя 
    })

})

describe('Проверка, что в логине есть @', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зайшли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восстановить пароль 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин 
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль 
        cy.get('#loginButton').click(); //  нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст 
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя 
    })

})