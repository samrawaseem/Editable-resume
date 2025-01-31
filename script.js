// Getting form and output div elements
var resumeForm = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var profileInput = document.querySelector('input[type="file"]');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var education = document.getElementById('education').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var gradDate = document.getElementById('date').value;
    var experience = document.getElementById('experience').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var dates = document.getElementById('dates').value;
    var skills = document.getElementById('skills').value;
    // Check if the profile picture is selected
    var file = profileInput.files ? profileInput.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Dynamically creating the editable resume HTML with the profile picture
            var resumeHTML = "\n        <h2 contenteditable=\"true\"><center>Resume</center></h2>\n        <left><img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 20px;\"></left>\n        <h3 contenteditable=\"true\">Personal Information</h3>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3 contenteditable=\"true\">Summary</h3>\n        <p contenteditable=\"true\">").concat(summary, "</p>\n        <h3 contenteditable=\"true\">Education</h3>\n        <p><strong>Degree:</strong> <span contenteditable=\"true\">").concat(degree, "</span></p>\n        <p><strong>School:</strong> <span contenteditable=\"true\">").concat(school, "</span></p>\n        <p><strong>Graduation Date:</strong> <span contenteditable=\"true\">").concat(gradDate, "</span></p>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3 contenteditable=\"true\">Work Experience</h3>\n        <p><strong>Job Title:</strong> <span contenteditable=\"true\">").concat(jobTitle, "</span></p>\n        <p><strong>Company:</strong> <span contenteditable=\"true\">").concat(company, "</span></p>\n        <p><strong>Dates:</strong> <span contenteditable=\"true\">").concat(dates, "</span></p>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3 contenteditable=\"true\">Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n      ");
            // Inject the editable resume HTML into the resumeOutput div
            resumeOutput.innerHTML = resumeHTML;
        };
        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    }
});
