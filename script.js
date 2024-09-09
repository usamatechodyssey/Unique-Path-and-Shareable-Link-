// Function to toggle the visibility of the Skills section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skillsSection');
if (toggleSkillsBtn && skillsSection) { // Check if elements exist
    toggleSkillsBtn.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
// Function to toggle the visibility of the Experience section
var toggleExperienceBtn = document.getElementById('toggleExperienceBtn');
var experienceSection = document.getElementById('experienceSection');
if (toggleExperienceBtn && experienceSection) { // Check if elements exist
    toggleExperienceBtn.addEventListener('click', function () {
        if (experienceSection.style.display === 'none' || experienceSection.style.display === '') {
            experienceSection.style.display = 'block';
        }
        else {
            experienceSection.style.display = 'none';
        }
    });
}
// script.ts
// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Grab the form and relevant sections
    var resumeForm = document.getElementById("resumeForm");
    var nameField = document.getElementById("form-name");
    var titleField = document.getElementById("form-title");
    var emailField = document.getElementById("form-email");
    var phoneField = document.getElementById("form-phone");
    var addressField = document.getElementById("form-address");
    var aboutField = document.getElementById("form-about");
    var experienceTitleField = document.getElementById("form-experience1-title");
    var experienceCompanyField = document.getElementById("form-experience1-company");
    var education1Field = document.getElementById("form-education1");
    var education2Field = document.getElementById("form-education2");
    var education3Field = document.getElementById("form-education3");
    var skillSummary1Field = document.getElementById("form-skill-summary1");
    var skillSummary1LevelField = document.getElementById("form-skill-summary1-level");
    var skillSummary2Field = document.getElementById("form-skill-summary2");
    var skillSummary2LevelField = document.getElementById("form-skill-summary2-level");
    // The sections where the form data will be displayed
    var profileDetails = document.querySelector(".profile-details h1");
    var profileTitle = document.querySelector(".profile-details h2");
    var contactInfo = document.querySelector(".contact-info");
    var aboutMeSection = document.querySelector(".about-me p");
    var experienceSection = document.querySelector("#experienceSection");
    var educationSection = document.querySelector(".education");
    var skillsSummarySection = document.querySelector(".skills-summary");
    // Function to update resume dynamically
    function generateResume() {
        // Update name and title
        profileDetails.textContent = nameField.value || "John Doe";
        profileTitle.textContent = titleField.value || "Front End Developer";
        // Update contact info
        contactInfo.innerHTML = "\n      <p><i class=\"fas fa-envelope\"></i> <strong>Mail:</strong> ".concat(emailField.value || "john.doe@example.com", "</p><br>\n      <p><i class=\"fas fa-phone\"></i> <strong>Contact:</strong> ").concat(phoneField.value || "+123-456-7890", "</p><br>\n      <p><i class=\"fas fa-map-marker-alt\"></i> <strong>Address:</strong> ").concat(addressField.value || "123 Anywhere St., Any City", "</p>\n  ");
        // Update "About Me" section
        aboutMeSection.textContent = aboutField.value || "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        // Update experience section
        experienceSection.innerHTML = "\n      <div class=\"job\">\n          <h4>".concat(experienceTitleField.value || "Front-end Developer", ":</h4>\n          <p>").concat(experienceCompanyField.value || "Tech Company (2022-Present)", "</p>\n      </div>\n  ");
        // Update education section
        educationSection.innerHTML = "\n      <h3>Education</h3><br>\n      <div class=\"degree\">\n          <h4>High School:</h4>\n          <p>".concat(education1Field.value || "XYZ School (2016-2018)", "</p>\n      </div>\n      <div class=\"degree\">\n          <h4>Intermediate:</h4>\n          <p>").concat(education2Field.value || "ABC Degree College (2018-2022)", "</p>\n      </div>\n      <div class=\"degree\">\n          <h4>Bachelor:</h4>\n          <p>").concat(education3Field.value || "ABC University (2018-2022)", "</p>\n      </div>\n  ");
        // Update skills summary section
        skillsSummarySection.innerHTML = "\n      <h3>Skills Summary</h3><br>\n      <div class=\"skill\">\n          <p>".concat(skillSummary1Field.value || "Design Process", "</p>\n          <div class=\"progress-bar\">\n              <div class=\"progress\" style=\"width: ").concat(skillSummary1LevelField.value || "78", "%;\"></div>\n          </div>\n      </div>\n      <div class=\"skill\">\n          <p>").concat(skillSummary2Field.value || "Project Management", "</p>\n          <div class=\"progress-bar\">\n              <div class=\"progress\" style=\"width: ").concat(skillSummary2LevelField.value || "81", "%;\"></div>\n          </div>\n      </div>\n  ");
        alert('Your Resume Is Generated!Get Download');
    }
    // Add event listener to the submit button to generate the resume
    var generateButton = document.querySelector("button[type='button']");
    generateButton.addEventListener("click", generateResume);
});
// Function to generate the resume PDF
// Function to copy the URL for sharing
function copyLink() {
    var url = document.getElementById("url").innerText;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
}
// Get the profile image container and file input elements
var profileImageContainer = document.querySelector('.profile-image-container');
var uploadImageInput = document.getElementById('uploadImage');
var profileImage = document.getElementById('profileImage');
// Ensure the elements exist before adding event listeners
if (profileImageContainer && uploadImageInput && profileImage) {
    // Handle the image container click to trigger the file input
    profileImageContainer.addEventListener('click', function () {
        uploadImageInput.click();
    });
    // Handle the file input change to update the profile image
    uploadImageInput.addEventListener('change', function (event) {
        var target = event.target;
        var file = target.files ? target.files[0] : null;
        // Check if a file is selected
        if (file) {
            var reader = new FileReader();
            // Once the file is read, update the profile image source
            reader.onload = function (e) {
                if (e.target && e.target.result) {
                    profileImage.src = e.target.result;
                }
            };
            // Read the file as a Data URL to display it as an image
            reader.readAsDataURL(file);
        }
    });
}
