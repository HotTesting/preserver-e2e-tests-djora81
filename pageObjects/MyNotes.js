"use strict";

var BaseNotes = require('./BaseNotes');

class MyNotes extends BaseNotes {
    constructor() {
        super();
    }

    createNote(title, body) {
        $('.form-control').click();
        browser.sleep(2000);

        $('.btn').click();
        browser.sleep(2000);
    }

}

module.exports = MyNotes;


