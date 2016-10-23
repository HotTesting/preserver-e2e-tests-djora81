"use strict";

var MyNotes = require('../pageObjects/MyNotes.js');
var RecycleNotes = require('../pageObjects/RecycleNotes.js');

describe ('Create note title', function() {
    let myNotes = new MyNotes

    it('should create a note title', function() {
        
        myNotes.createNote('Test title text', '');
        $$('.form-control').first().sendKeys(createNote);
        let titleNote = $('.panel-body.my-note')
        expect(titleNote.isDisplayed()).toBe(true);
    });
});