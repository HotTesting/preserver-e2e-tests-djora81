"use strict";

var MyNotes = require('../pageObjects/MyNotes.js');
var RecycleNotes = require('../pageObjects/RecycleNotes.js');

describe ('Create note text', function() {
    let myNotes = new MyNotes();

    it('should create a note with text', function() {
        
        myNotes.createNote('', 'Test firtst note with some body text');
        $$('.form-control').get(1).sendKeys(createNote);
        let bodyNote = $('.panel-body.my-note')
        expect(bodyNote.isDisplayed()).toBe(true);
    });
});