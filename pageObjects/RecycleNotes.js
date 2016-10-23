"use strict";

var BaseNotes = require('./BaseNotes');

class RecycleNotes extends BaseNotes {
    constructor() {

    }
    recycleUrl(Url) {
        browser.get(browser.baseUrl + '/preserver/recycle-bin');
    }
}
module.exports = RecycleNotes;