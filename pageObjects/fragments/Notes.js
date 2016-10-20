"use strict";

class Notes {
    constructor () {
        this.myNote = $('.panel-body');
        this.archiveButton = $('.fa.fa-download');
        this.colorButton = $('.fa.fa-th-large');
        this.trashButton = $('.fa.fa-trash');
    }
}
class DeletedNotes {
    constructor () {
        this.delNote = $('.panel-body');
        this.trashButton = $('.fa.fa-trash')
        this.restoreButton = $('.fa.fa-undo');
    }
}

module.exports = Notes;