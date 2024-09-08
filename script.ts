import html2pdf from 'html2pdf.js';

document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Display the link to the user
    const linkContainer = document.getElementById('linkContainer');
    if (linkContainer) {
        const resumeUrl = "https://example.com/resume"; // You can dynamically generate this URL
        linkContainer.innerHTML = `
            <p>Resume created: <a href="${resumeUrl}" target="_blank">${resumeUrl}</a></p>
            <button id="copyLinkBtn">Copy Resume Link</button>
            <button id="downloadBtn">Download Resume as PDF</button>
        `;

        // Attach event listener for "Copy Resume Link"
        const copyLinkBtn = document.getElementById('copyLinkBtn');
        copyLinkBtn?.addEventListener('click', () => {
            navigator.clipboard.writeText(resumeUrl)
                .then(() => alert('Resume link copied!'))
                .catch(err => console.error('Failed to copy link: ', err));
        });

        // Attach event listener for "Download Resume as PDF"
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn?.addEventListener('click', () => {
            const resumeElement = document.body;  // Customize as needed
            html2pdf().from(resumeElement).save('resume.pdf');
        });
    }
});
