const vscode = require("vscode");

function activate() {
    console.log("run");
}
exports.activate = activate;

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
