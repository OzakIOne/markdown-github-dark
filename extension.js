const vscode = require("vscode");

function activate(context) {
    console.log("run");
}
exports.activate = activate;

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
