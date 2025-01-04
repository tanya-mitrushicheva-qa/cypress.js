describe('Покупка аватара', function () {

   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); // зайшли на сайт

        

        cy.get('input[type="email"]').type('tanyamitrushicheva@yandex.ru'); // ввели верный логин
        cy.get('input[type="password"]').type('Tanyamitr1'); // ввели верный пароль 

        cy.get('button[type="submit"]').click(); //  нажала войти
        
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1127');                           // вводим срок действия карты
         cy.get('.k_input_name').type('tanyamitrushicheva');             // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });
    

