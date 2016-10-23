"use strict";

var MyNotes = require('../pageObjects/MyNotes.js');
var RecycleNotes = require('../pageObjects/RecycleNotes.js');

describe ('Create blank note', function() {
    let myNotes = new MyNotes();

    it('shouldn"t create a blank note', function() {
        myNotes.createNote('', '');
        let note = $('.panel-body.my-note');
        expect(note.isPresent()).toBe(false);
    });
});