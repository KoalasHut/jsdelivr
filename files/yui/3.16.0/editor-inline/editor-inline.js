/*
YUI 3.16.0 (build 76f0e08)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add('editor-inline', function (Y, NAME) {

/**
 * Base class for InlineEditor. Instead to use an iframe, uses content editable element via ContentEditable Plugin.
 *
 *      var editor = new Y.InlineEditor({
 *          content: 'Foo'
 *      });
 *      editor.render('#demo');
 *
 * @class InlineEditor
 * @extends EditorBase
 * @module editor
 * @main editor
 * @submodule editor-inline
 * @constructor
 */

var InlineEditor = function() {
    InlineEditor.superclass.constructor.apply(this, arguments);
};

Y.extend(InlineEditor, Y.EditorBase, {
    initializer: function() {
        this.plug(Y.Plugin.ContentEditable);
    }
});

Y.InlineEditor = InlineEditor;

}, '3.16.0', {"requires": ["editor-base", "content-editable"]});
