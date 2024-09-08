"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf_js_1 = require("html2pdf.js");
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Display the link to the user
    var linkContainer = document.getElementById('linkContainer');
    if (linkContainer) {
        var resumeUrl_1 = "https://example.com/resume"; // You can dynamically generate this URL
        linkContainer.innerHTML = "\n            <p>Resume created: <a href=\"".concat(resumeUrl_1, "\" target=\"_blank\">").concat(resumeUrl_1, "</a></p>\n            <button id=\"copyLinkBtn\">Copy Resume Link</button>\n            <button id=\"downloadBtn\">Download Resume as PDF</button>\n        ");
        // Attach event listener for "Copy Resume Link"
        var copyLinkBtn = document.getElementById('copyLinkBtn');
        copyLinkBtn === null || copyLinkBtn === void 0 ? void 0 : copyLinkBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(resumeUrl_1)
                .then(function () { return alert('Resume link copied!'); })
                .catch(function (err) { return console.error('Failed to copy link: ', err); });
        });
        // Attach event listener for "Download Resume as PDF"
        var downloadBtn = document.getElementById('downloadBtn');
        downloadBtn === null || downloadBtn === void 0 ? void 0 : downloadBtn.addEventListener('click', function () {
            var resumeElement = document.body; // Customize as needed
            (0, html2pdf_js_1.default)().from(resumeElement).save('resume.pdf');
        });
    }
});
