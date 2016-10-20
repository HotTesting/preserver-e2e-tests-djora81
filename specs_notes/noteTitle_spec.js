"use strict";

var MyNotes = require('../pageObjects/MyNotes.js');
var RecycleNotes = require('../pageObjects/RecycleNotes.js');

describe ('Create note title', function() {

    it('should create a note title', function() {
        $('.form-control').click();
        browser.sleep(2000);

        let titleText = 'Test title text'
        $$('.form-control').first().sendKeys(titleText);
        browser.sleep(1000);
        $('.btn').click();
        browser.sleep(2000);
        let titleNote = $('.panel-body.my-note')
        expect(titleNote.isDisplayed()).toBe(true);
    });
});