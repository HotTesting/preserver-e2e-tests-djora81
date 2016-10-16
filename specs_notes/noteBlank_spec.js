"use strict";


describe ('Create blank note', function() {

    it('shouldn"t create a blank note', function() {
        $('.form-control').click();
        browser.sleep(2000);

        $('.btn').click();
        let note = $('.panel-body.my-note')
        expect(note.isPresent()).toBe(false);
    });
});