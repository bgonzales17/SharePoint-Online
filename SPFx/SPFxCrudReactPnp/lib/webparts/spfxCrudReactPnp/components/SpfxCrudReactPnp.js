var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import styles from "./SpfxCrudReactPnp.module.scss";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
var SpfxCrudReactPnp = /** @class */ (function (_super) {
    __extends(SpfxCrudReactPnp, _super);
    function SpfxCrudReactPnp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Create Item
        _this.createItem = function () { return __awaiter(_this, void 0, void 0, function () {
            var addItem, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.lists.getByTitle("Test").items.add({
                                Title: document.getElementById("title")["value"],
                                SoftwareName: document.getElementById("name")["value"]
                            })];
                    case 1:
                        addItem = _a.sent();
                        console.log(addItem);
                        alert("Item created successfully with ID: " + addItem.data.ID);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //Get Item by ID
        _this.getItemById = function () { return __awaiter(_this, void 0, void 0, function () {
            var id, item, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        id = document.getElementById("itemId")["value"];
                        if (!(id > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sp.web.lists
                                .getByTitle("Test")
                                .items.getById(id)
                                .get()];
                    case 1:
                        item = _a.sent();
                        document.getElementById("title")["value"] = item.Title;
                        document.getElementById("name")["value"] = item.SoftwareName;
                        return [3 /*break*/, 3];
                    case 2:
                        alert("Please enter a valid item id.");
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        //Get all items
        _this.getAllItems = function () { return __awaiter(_this, void 0, void 0, function () {
            var items, html, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, sp.web.lists.getByTitle("Test").items.get()];
                    case 1:
                        items = _a.sent();
                        console.log(items);
                        if (items.length > 0) {
                            html = "<table><tr><th>ID</th><th>Title</th><th>SoftwareName</th></tr>";
                            items.map(function (item, index) {
                                html += "<tr><td>" + item.ID + "</td><td>" + item.Title + "</td><td>" + item.SoftwareName + "</td></li>";
                            });
                            html += "</table>";
                            document.getElementById("allItems").innerHTML = html;
                        }
                        else {
                            alert("List is empty.");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //Update Item
        _this.updateItem = function () { return __awaiter(_this, void 0, void 0, function () {
            var id, itemUpdate, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        id = document.getElementById("itemId")["value"];
                        if (!(id > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sp.web.lists
                                .getByTitle("Test")
                                .items.getById(id)
                                .update({
                                Title: document.getElementById("title")["value"],
                                SoftwareName: document.getElementById("name")["value"],
                            })];
                    case 1:
                        itemUpdate = _a.sent();
                        console.log(itemUpdate);
                        alert("Item with ID: " + id + " updated successfully!");
                        return [3 /*break*/, 3];
                    case 2:
                        alert("Please enter a valid item id.");
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        //Delete Item
        _this.deleteItem = function () { return __awaiter(_this, void 0, void 0, function () {
            var id, deleteItem, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        id = parseInt(document.getElementById("itemId")["value"]);
                        if (!(id > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sp.web.lists
                                .getByTitle("Test")
                                .items.getById(id)
                                .delete()];
                    case 1:
                        deleteItem = _a.sent();
                        console.log(deleteItem);
                        alert("Item ID: " + id + " deleted successfully!");
                        return [3 /*break*/, 3];
                    case 2:
                        alert("Please enter a valid item id.");
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_5 = _a.sent();
                        console.error(e_5);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    SpfxCrudReactPnp.prototype.render = function () {
        var _a = this.props, description = _a.description, isDarkTheme = _a.isDarkTheme, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        return (React.createElement("div", { className: styles.spfxCrudReactPnp },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("div", { className: styles.itemField },
                            React.createElement("div", { className: styles.fieldLabel }, "ID:"),
                            React.createElement("input", { type: "text", id: "itemId" })),
                        React.createElement("div", { className: styles.itemField },
                            React.createElement("div", { className: styles.fieldLabel }, "Title"),
                            React.createElement("input", { type: "text", id: "title" })),
                        React.createElement("div", { className: styles.itemField },
                            React.createElement("div", { className: styles.fieldLabel }, "SoftwareName"),
                            React.createElement("input", { type: "text", id: "name" })),
                        React.createElement("div", { className: styles.itemField },
                            React.createElement("div", { className: styles.fieldLabel }, "All Items:"),
                            React.createElement("div", { id: "allItems" })),
                        React.createElement("div", { className: styles.buttonSection },
                            React.createElement("div", { className: styles.button },
                                React.createElement("span", { className: styles.label, onClick: this.createItem }, "Create")),
                            React.createElement("div", { className: styles.button },
                                React.createElement("span", { className: styles.label, onClick: this.getItemById }, "Read")),
                            React.createElement("div", { className: styles.button },
                                React.createElement("span", { className: styles.label, onClick: this.getAllItems }, "Read All")),
                            React.createElement("div", { className: styles.button },
                                React.createElement("span", { className: styles.label, onClick: this.updateItem }, "Update")),
                            React.createElement("div", { className: styles.button },
                                React.createElement("span", { className: styles.label, onClick: this.deleteItem }, "Delete"))))))));
    };
    return SpfxCrudReactPnp;
}(React.Component));
export default SpfxCrudReactPnp;
//# sourceMappingURL=SpfxCrudReactPnp.js.map