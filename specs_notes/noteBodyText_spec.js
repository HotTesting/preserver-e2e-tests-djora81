"use strict";


describe ('Create note text', function() {

    it('should create a note with text', function() {
        $('.form-control').click();
        browser.sleep(2000);

        let bodyText = 'Test firtst note with some body text'
        $$('.form-control').get(1).sendKeys(bodyText);
        browser.sleep(1000);
        $('.btn').click();
        browser.sleep(2000);
        let bodyNote = $('.panel-body.my-note')
        expect(bodyNote.isDisplayed()).toBe(true);
    });
});