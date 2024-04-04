describe('Onliner test', function () {

    before(async () => {

    })

    after(async () => {

    })

    it('should be error message if we input wrong login and password', async () => {
        await browser.url('https://www.onliner.by/');
        const enterButton = await $('.auth-bar__item.auth-bar__item--text');
        await enterButton.click();
        const loginField = await $('[placeholder="Ник или e-mail"]')
        await loginField.setValue('Login Name');
        const passwordField = await $('[placeholder="Пароль"]')
        await passwordField.setValue('Password')
        const loginButton = await $('.auth-button_primary')
        await loginButton.click();
        const errorMessage = await $('.auth-form__description_error')
        expect(await errorMessage.getText()).toEqual('Неверный логин или пароль')
    })
})