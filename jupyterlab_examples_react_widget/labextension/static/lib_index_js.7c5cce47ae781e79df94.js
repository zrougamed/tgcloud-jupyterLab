(self["webpackChunk_jupyterlab_examples_react_widget"] = self["webpackChunk_jupyterlab_examples_react_widget"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatIcon": () => (/* binding */ chatIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget */ "./lib/widget.js");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__);



// import { reactIcon } from '@jupyterlab/ui-components';

const CHAT_ICON = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image xlink:href="data:;base64,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" width="52" height="52" /></svg>';
const chatIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__.LabIcon({
    name: 'jitsi:chat',
    svgstr: CHAT_ICON
});
/**
 * The command IDs used by the react-widget plugin.
 */
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.create = 'create-react-widget';
})(CommandIDs || (CommandIDs = {}));
/**
 * Initialization data for the react-widget extension.
 */
const extension = {
    id: 'react-widget',
    autoStart: true,
    optional: [_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__.ILauncher],
    activate: (app, launcher) => {
        const { commands } = app;
        const command = CommandIDs.create;
        commands.addCommand(command, {
            caption: 'tgCloud Cloud platform',
            label: 'TigerGraph Cloud',
            icon: args => (args['isPalette'] ? null : chatIcon),
            execute: () => {
                const content = new _widget__WEBPACK_IMPORTED_MODULE_3__.CounterWidget();
                const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content });
                widget.title.label = 'TigerGraph Cloud';
                widget.title.icon = chatIcon;
                app.shell.add(widget, 'main');
            }
        });
        if (launcher) {
            launcher.add({
                command
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ }),

/***/ "./lib/widget.js":
/*!***********************!*\
  !*** ./lib/widget.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterWidget": () => (/* binding */ CounterWidget)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const LogOut = () => {
    let key = 'token';
    localStorage.removeItem(key);
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    return CounterComponent;
};
async function loginFunction() {
    // let key = 'token';
    // Get creds
    const domain = document.getElementById("domaintigergraph");
    console.log(domain.getAttribute('value'));
    const username = document.getElementById("usernametigergraph").value;
    console.log(username);
    const password = document.getElementById("passwordtigergraph").value;
    console.log(password);
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("host", domain.getAttribute('value'));
    const response = await window.fetch('http://127.0.0.1:5000/loginbox', {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }).then(response => response.json())
        .then(result => {
        console.log('Success:', result);
        return result;
    })
        .catch(error => {
        console.error('Error:', error);
        console.log("Error");
    });
    console.log(response);
    if (response["value"] != null) {
        // enable algo combo and graphs until login
        const graphsControler = document.getElementById("graphs");
        graphsControler.removeAttribute("disabled");
        graphsControler.innerHTML = '<option value=' + response['value'] + ">" + response['value'] + "</option>";
        const algControler = document.getElementById("algos");
        algControler.innerHTML = '<option value="AMLSIM">AML Sim</option>';
        algControler.removeAttribute("disabled");
    }
}
function backtoListing() {
    const tabAlgos = document.getElementById("tab2");
    tabAlgos.classList.remove('active');
    tabAlgos.classList.add('inactive');
    const tabMachines = document.getElementById("tab1");
    tabMachines.classList.add('active');
    tabMachines.classList.remove('inactive');
}
function loaderAlgo(domain, id) {
    const tabAlgos = document.getElementById("tab2");
    tabAlgos.classList.remove('inactive');
    tabAlgos.classList.add('active');
    const tabMachines = document.getElementById("tab1");
    tabMachines.classList.add('inactive');
    tabMachines.classList.remove('active');
    console.log(domain);
    console.log(id);
    const textDomain = document.getElementById("domaintigergraph");
    console.log(textDomain);
    textDomain.setAttribute("value", "https://" + domain);
    // disabe algo combo and graphs until login
    const graphsControler = document.getElementById("graphs");
    graphsControler.setAttribute("disabled", "true");
    const algControler = document.getElementById("algos");
    algControler.setAttribute("disabled", "true");
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'setUsername':
            return Object.assign(Object.assign({}, state), { username: action.payload });
        case 'setPassword':
            return Object.assign(Object.assign({}, state), { password: action.payload });
        case 'setIsButtonDisabled':
            return Object.assign(Object.assign({}, state), { isButtonDisabled: action.payload });
        case 'loginSuccess':
            return Object.assign(Object.assign({}, state), { helperText: action.payload, isError: false });
        case 'loginFailed':
            return Object.assign(Object.assign({}, state), { helperText: action.payload, isError: true });
        case 'setIsError':
            return Object.assign(Object.assign({}, state), { isError: action.payload });
    }
};
const initialState = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
};
const CloudListingComponent = () => {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        async function anyNameFunction() {
            console.log("Component Loaded ...");
            let key = 'token';
            let token = localStorage.getItem(key);
            console.log(token);
            const listMachines = await getlistmachines(token);
            console.log(listMachines);
            let rows = listMachines["Result"].map(function (d) {
                if (d.State == "terminated") {
                    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", { src: d.Logo, style: { width: "20px", height: "20px" } }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineID", value: d.ID }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineDomain", value: d.Domain })),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Name),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Tag),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-circle " + d.State, "aria-hidden": "true" }, " "),
                            " ",
                            d.State,
                            " "),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.ExternalInstanceType),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.CreatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.UpdatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", { className: "actions" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-play", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-stop", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-tasks", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }))));
                }
                if (d.State == "stopped") {
                    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", { src: d.Logo, style: { width: "20px", height: "20px" } }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineID", value: d.ID }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineDomain", value: d.Domain })),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Name),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Tag),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-circle " + d.State, "aria-hidden": "true" }, " "),
                            " ",
                            d.State,
                            " "),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.ExternalInstanceType),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.CreatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.UpdatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", { className: "actions" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", onClick: () => opsMachines("start", d.ID) },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-play", style: { padding: "10px" }, "aria-hidden": "true" })),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-stop", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-tasks", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }))));
                }
                if (d.State == "ready") {
                    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", { src: d.Logo, style: { width: "20px", height: "20px" } }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineID", value: d.ID }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineDomain", value: d.Domain })),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Name),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Tag),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-circle " + d.State, "aria-hidden": "true" }, " "),
                            " ",
                            d.State,
                            " "),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.ExternalInstanceType),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.CreatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.UpdatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", { className: "actions" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-play", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", onClick: () => opsMachines("stop", d.ID) },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-stop", style: { padding: "10px" }, "aria-hidden": "true" })),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", onClick: () => loaderAlgo(d.Domain, d.ID) },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-tasks", style: { padding: "10px" }, "aria-hidden": "true" })))));
                }
                if ((d.State == "starting") || (d.State == "stopping")) {
                    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", { src: d.Logo, style: { width: "20px", height: "20px" } }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineID", value: d.ID }),
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "hidden", id: "machineDomain", value: d.Domain })),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Name),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.Tag),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-circle " + d.State, "aria-hidden": "true" }, " "),
                            " ",
                            d.State,
                            " "),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.ExternalInstanceType),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.CreatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", null, d.UpdatedAt),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", { className: "actions" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-play", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-stop", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-tasks", style: { color: "grey", padding: "10px" }, "aria-hidden": "true" }))));
                }
            });
            console.log(rows);
            const rowsElement = document.getElementById("rows");
            react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(rows, rowsElement);
        }
        try {
            setInterval(async () => {
                console.log("refreshing !!");
                anyNameFunction();
                console.log("refreshed !!");
            }, 5000);
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: "listing", className: "listingStyle" },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("title", null, "AWS"),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("meta", { charSet: "utf-8" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: "\n\t\t  /* MOBILE style */\n\t@media screen and (max-width: 992px) {\n\t    /*\n\t     * In Mobile, hide the tabs controls and undo some potential damage done by the accordion\n\t     */\n\t    .responsive-tabs .nav-tabs,\n\t    .responsive-tabs .tab-content .collapse.active:not(.in) {\n\t        display: none;\n\t    }\n\t    .responsive-tabs .tab-content .collapse.in,\n\t    .responsive-tabs .tab-content .collapsing {\n\t        display: block;\n\t    }\n\t}\n\n\n\t/* DESKTOP style */\n\t@media screen and (min-width: 991px) {\n\t    /*\n\t     * In desktop, hide the accordion's controls and undo some potential damage done on the active tab\n\t     */\n\t    .responsive-tabs .panel-heading {\n\t        display: none;\n\t    }\n\t    .responsive-tabs > .active {\n\t        height: auto !important;\n\t    }\n\t}\n\n\n\t/* To make it a bit prettier */\n\tbody {\n\t    padding: 15px;\n\t}\n\thtml , body {\n\t\theight: 100%;\n    \tbackground: #f7f7f7;\n\t}\n\t.tab-content .panel-heading {\n\t    padding: 0;\n\t}\n\n\t.tab-content a {\n\t    display: block;\n\t    margin-bottom: -1px;\n\t    padding: 10px 15px;\n\t    border: solid #ccc;\n\t    border-width: 1px 0;\n\t}\n\t.table{\n\t\tbackground: #ffffff;\n\t\tbox-shadow: 2px 2px 5px #aaaaaa;\n\t}\n\t.welcome{\n\t\tpadding: 3px;\n\t    background: #ffffff;\n\t    box-shadow: 2px 2px 5px #aaaaaa;\n\t    border-radius: 5px;\n\t    border-left: 10px solid #e15f5f;\n\t}\n\t.nav-tabs{\n\t\tmargin:1%;\n\t}\n\t.welcome p{\n\t    padding: 1%;\n\t    color: #f17790;\n\t    margin: 0;\n\t}\n\t#tab1 h4{\n\t\tmargin: 2% 0;\n\t}\n\t#tab1 i.fa-compass{\n\t\tcolor: #faa70e;\n\t}\n\t.fa-file-alt{\n\t\tcolor: #3a8be5;\n\t}\n\t.actions-ul{\n\t\tlist-style: none;\n\t    padding: 5px 25px;\n\t    padding: 0px;\n\t    box-shadow: 2px 2px 5px #aaaaaa;\n\t    width: max-content;\n\t}\n\t.actions-ul li a{\n\t    padding: 5px 25px;\n\t}\n\t" } }),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "responsive-tabs" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "logout" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", onClick: LogOut, className: "btn btn-info btn-lg" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", { className: "glyphicon glyphicon-log-out" }),
                    " Log out")),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", { className: "nav nav-tabs", role: "tablist" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", { role: "presentation", className: "active" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", "aria-controls": "tab1", onClick: () => backtoListing(), role: "tab", "data-toggle": "tab" }, "Machines")),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", { role: "presentation" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", "aria-controls": "tab2", role: "tab", "data-toggle": "tab" }, "Algo Loader"))),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "welcome" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Welcome to TigerGraph Cloud!")),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: "tabs-content", className: "tab-content panel-group" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "panel-heading", role: "tab", id: "heading1" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#tab1", role: "button", "data-toggle": "collapse", "data-parent": "tabs-content", "aria-expanded": "true", "aria-controls": "tab1" }, "Tab 1")),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: "tab1", role: "tabpanel", className: "tab-pane active panel-collapse collapse in active", "aria-labelledby": "heading1" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h4", null,
                        "My solutions ",
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-compass", "aria-hidden": "true" })),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", { className: "table" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" }),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" }, "Name"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" }, "Tag"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" }, "Status"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" }, "Instance"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" }, "Creation Date"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" }, "Last Upadated"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", { scope: "col" },
                                    "Actions ",
                                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "fa fa-cog", "aria-hidden": "true" })))),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", { id: "rows" }))),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "panel-heading", role: "tab", id: "heading2" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#tab2", className: "collapsed", role: "button", "data-toggle": "collapse", "data-parent": "tabs-content", "aria-expanded": "true", "aria-controls": "tab2" }, "Tab 2")),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: "tab2", role: "tabpanel", className: "tab-pane panel-collapse collapse inactive", "aria-labelledby": "heading2" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "training" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "load-block form-group" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "text", name: "host", id: "domaintigergraph", value: "", className: "form-control", disabled: true }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "text", name: "mail", id: "usernametigergraph", placeholder: "tigergraph", className: "form-control" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { type: "password", name: "password", id: "passwordtigergraph", className: "form-control", placeholder: "Password" }),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", className: "btn btn-info btn-lg", onClick: loginFunction }, "Login")),
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-group", id: "AlgoControler" },
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", null, "Graph"),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", { id: "graphs", className: "form-control" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", null, "-"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", null, "-")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h5", null, "Algorithm"),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", { id: "algos", className: "form-control" },
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", null, "-"),
                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", null, "-")),
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#", className: "btn btn-info btn-lg" }, "Load"))),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "live-output" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Live output")))))));
};
// Login Component
const CounterComponent = () => {
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (state.username.trim() && state.password.trim()) {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: false
            });
        }
        else {
            dispatch({
                type: 'setIsButtonDisabled',
                payload: true
            });
        }
    }, [state.username, state.password]);
    const boxlogin = {
        padding: "10px",
        backgroundColor: "#fefefe",
        fontFamily: "Arial",
        fontsize: "10px"
    };
    async function handleLogin() {
        var formdata = new FormData();
        formdata.append("username", state.username);
        formdata.append("password", state.password);
        const rootLoader = document.getElementById("Loader");
        rootLoader.classList.add("active");
        const response = await window.fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        }).then(response => response.json())
            .then(result => {
            console.log('Success:', result);
            return result;
        })
            .catch(error => {
            console.error('Error:', error);
            dispatch({
                type: 'loginFailed',
                payload: 'Incorrect username or password'
            });
            console.log("Error");
        });
        // handling results
        if (response["Hello"] == 'tgcloud') {
            let key = 'token';
            localStorage.setItem(key, response['token']);
            rootLoader.classList.remove("active");
            const rootElement = document.getElementById("root");
            react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CloudListingComponent, null), rootElement);
        }
        else {
            dispatch({
                type: 'loginFailed',
                payload: 'Incorrect username or password'
            });
            console.log("Error");
            rootLoader.classList.remove("active");
        }
    }
    ;
    const handleKeyPress = (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            state.isButtonDisabled || handleLogin();
        }
    };
    const handleUsernameChange = (event) => {
        dispatch({
            type: 'setUsername',
            payload: event.target.value
        });
    };
    const handlePasswordChange = (event) => {
        dispatch({
            type: 'setPassword',
            payload: event.target.value
        });
    };
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial"
    };
    const mystyleButton = {
        color: "white",
        padding: "10px 0",
        backgroundColor: "DodgerBlue",
        width: "100%",
        height: "100%",
        fontFamily: "Arial"
    };
    const rootContainer = {
        width: "100%",
        height: "100%",
    };
    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: "root", style: rootContainer },
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { id: "Loader", className: "Loader" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "spinner" })),
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "container" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "mat-toolbar mat-primary mat-toolbar-single-row" }, "TigerGraph Cloud"),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "container-mini" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", { style: boxlogin, noValidate: true, autoComplete: "off" },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", { width: "50%", src: "https://tgcloud.io/assets/img/tgcloud-logo.png" }),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h3", null, "TigerGraph Cloud"),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { id: "username", type: "email", className: "texts", placeholder: "Enter email", onChange: handleUsernameChange, onKeyPress: handleKeyPress })),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "form-group" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", { id: "password", type: "password", className: "texts", placeholder: "Enter password", onChange: handlePasswordChange, onKeyPress: handleKeyPress })),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { style: mystyle, className: "btn btn-primary btn-block" },
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", { style: mystyleButton, type: "button", onClick: handleLogin, disabled: state.isButtonDisabled }, "Sign in")),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", { className: "forgot-password text-right" },
                        "Forgot ",
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "#" }, "password?")))))));
};
// Getting the Machines from tgcloud 
async function getlistmachines(token) {
    var formdata = new FormData();
    formdata.append("token", token);
    const listMachines = await window.fetch('http://127.0.0.1:5000/list', {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }).then(response => response.json())
        .then(result => {
        console.log(result);
        if (result["error"] == 401) {
            localStorage.removeItem("token");
            react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CounterComponent, null));
        }
        else {
            return result;
        }
    })
        .catch(error => {
        console.log("Error");
    });
    return listMachines;
}
async function opsMachines(action, id_machine) {
    let key = "token";
    const token = localStorage.getItem(key);
    var formdata = new FormData();
    formdata.append("token", token);
    formdata.append("id_machine", id_machine);
    formdata.append("action", action);
    const listMachines = await window.fetch('http://127.0.0.1:5000/ops', {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }).then(response => response.json())
        .then(result => {
        console.log(result);
        if (result["error"] == 401) {
            localStorage.removeItem("token");
            react_dom__WEBPACK_IMPORTED_MODULE_1___default().render(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CounterComponent, null));
        }
        else {
            return result;
        }
    })
        .catch(error => {
        console.log("Error");
    });
    return listMachines;
}
class CounterWidget extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    constructor() {
        super();
        this.addClass('jp-ReactWidget');
    }
    render() {
        let key = 'token';
        let token = localStorage.getItem(key);
        // check if token is ok ??? ToDo : 
        if (token != null) {
            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CloudListingComponent, null);
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CounterComponent, null);
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=lib_index_js.7c5cce47ae781e79df94.js.map