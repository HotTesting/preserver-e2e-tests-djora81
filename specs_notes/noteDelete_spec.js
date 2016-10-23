"use strict";

var MyNotes = require('../pageObjects/MyNotes.js');
var RecycleNotes = require('../pageObjects/RecycleNotes.js');

describe ('Delete note', function() {
    let myNotes = new MyNotes();
    let recycleNotes = new RecycleNotes();

    it('should delete a note in recycle bin', function() {

        myNotes.createNote('Test del note', '');
        $$('.form-control').first().sendKeys(createNote);
        let titleNote = $('.panel-body.my-note')
        expect(titleNote.isDisplayed()).toBe(true);
        $('.fa.fa-trash').click();
        browser.sleep(2000);
        recycleNotes.recycleUrl(Url);
        expect(titleNote.isPresent()).toBe(true);
        browser.sleep(2000);
    });
});