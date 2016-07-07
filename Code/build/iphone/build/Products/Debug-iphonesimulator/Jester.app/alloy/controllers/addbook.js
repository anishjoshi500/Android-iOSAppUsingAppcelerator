function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function addBook() {
        var book = Alloy.createModel("books", {
            title: $.titleInput.value,
            author: $.authorInput.value
        });
        myBooks.add(book);
        book.save();
        $.addbook.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addbook";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addbook = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "addbook"
    });
    $.__views.addbook && $.addTopLevelView($.__views.addbook);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.addbook.add($.__views.__alloyId0);
    $.__views.titleInput = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: 10,
        left: 20,
        right: 20,
        height: 40,
        id: "titleInput",
        hintText: "Title..."
    });
    $.__views.__alloyId0.add($.__views.titleInput);
    $.__views.authorInput = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: 10,
        left: 20,
        right: 20,
        height: 40,
        id: "authorInput",
        hintText: "Author..."
    });
    $.__views.__alloyId0.add($.__views.authorInput);
    $.__views.insertBookButton = Ti.UI.createButton({
        title: "Add",
        id: "insertBookButton"
    });
    $.__views.__alloyId0.add($.__views.insertBookButton);
    addBook ? $.addListener($.__views.insertBookButton, "click", addBook) : __defers["$.__views.insertBookButton!click!addBook"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    __defers["$.__views.insertBookButton!click!addBook"] && $.addListener($.__views.insertBookButton, "click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;