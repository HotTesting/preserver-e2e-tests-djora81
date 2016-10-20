"use strict";

var MyNotes = require('../pageObjects/MyNotes.js');
var RecycleNotes = require('../pageObjects/RecycleNotes.js');

describe ('Delete note', function() {

    it('should delete a note in recycle bin', function() {
        $('.form-control').click();
        browser.sleep(2000);

        let titleText = 'Test deleting note'
        $$('.form-control').first().sendKeys(titleText);
        browser.sleep(1000);
        $('.btn').click();
        browser.sleep(2000);
        let titleNote = $('.panel-body.my-note')
        expect(titleNote.isDisplayed()).toBe(true);
        $('.fa.fa-trash').click();
        browser.sleep(2000);
        browser.get(browser.baseUrl + '/preserver/recycle-bin');
        expect(titleNote.isPresent()).toBe(true);
        browser.sleep(2000);
        $('.fa.fa-trash').click();
        browser.sleep(1000);
        $('.btn.btn-primary').click();
        expect(titleNote.isPresent()).toBe(false);
        browser.sleep(2000);
    });
});