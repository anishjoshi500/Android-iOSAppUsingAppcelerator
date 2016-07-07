function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId10(e) {
        if (e && e.fromAdapter) return;
        __alloyId10.opts || {};
        var models = __alloyId9.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId8 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId6.__transform["title"] ? __alloyId6.__transform["title"] : __alloyId6.get("title"),
                author: "undefined" != typeof __alloyId6.__transform["author"] ? __alloyId6.__transform["author"] : __alloyId6.get("author")
            });
            rows.push(__alloyId8);
            showBook ? $.addListener(__alloyId8, "click", showBook) : __defers["__alloyId8!click!showBook"] = true;
        }
        $.__views.__alloyId5.setData(rows);
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author
        };
        var bookview = Alloy.createController("bookdetails", args).getView();
        $.index.openWindow(bookview);
    }
    function addBook() {
        var myAddBook = Alloy.createController("addbook", {}).getView();
        $.index.openWindow(myAddBook);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    Alloy.Collections.instance("books");
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId4"
    });
    $.__views.__alloyId5 = Ti.UI.createTableView({
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    var __alloyId9 = Alloy.Collections["books"] || books;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    var __alloyId13 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Add a book"
    });
    __alloyId13.push($.__views.add);
    addBook ? $.addListener($.__views.add, "click", addBook) : __defers["$.__views.add!click!addBook"] = true;
    $.__views.__alloyId11 = Ti.UI.iOS.createToolbar({
        items: __alloyId13,
        bottom: "0",
        id: "__alloyId11"
    });
    $.__views.__alloyId4.add($.__views.__alloyId11);
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId4,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
    };
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    var book = Alloy.createModel("books", {
        title: "MyFirstBook",
        author: "Anish Joshi"
    });
    myBooks.add(book);
    book.save();
    $.index.open();
    __defers["__alloyId8!click!showBook"] && $.addListener(__alloyId8, "click", showBook);
    __defers["$.__views.add!click!addBook"] && $.addListener($.__views.add, "click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;