
// Getting form and output div elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
const profileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

resumeForm.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form submission

  // Get the form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const school = (document.getElementById('school') as HTMLInputElement).value;
  const gradDate = (document.getElementById('date') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const company = (document.getElementById('company') as HTMLInputElement).value;
  const dates = (document.getElementById('dates') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Check if the profile picture is selected
  const file = profileInput.files ? profileInput.files[0] : null;
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target?.result as string;

      // Dynamically creating the editable resume HTML with the profile picture
      const resumeHTML = `
        <h2 contenteditable="true"><center>Resume</center></h2>
        <center><img src="${imageUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;"></center>
        <h3 contenteditable="true">Personal Information</h3>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <h3 contenteditable="true">Summary</h3>
        <p contenteditable="true">${summary}</p>
        <h3 contenteditable="true">Education</h3>
        <p><strong>Degree:</strong> <span contenteditable="true">${degree}</span></p>
        <p><strong>School:</strong> <span contenteditable="true">${school}</span></p>
        <p><strong>Graduation Date:</strong> <span contenteditable="true">${gradDate}</span></p>
        <p contenteditable="true">${education}</p>
        <h3 contenteditable="true">Work Experience</h3>
        <p><strong>Job Title:</strong> <span contenteditable="true">${jobTitle}</span></p>
        <p><strong>Company:</strong> <span contenteditable="true">${company}</span></p>
        <p><strong>Dates:</strong> <span contenteditable="true">${dates}</span></p>
        <p contenteditable="true">${experience}</p>
        <h3 contenteditable="true">Skills</h3>
        <p contenteditable="true">${skills}</p>
      `;

      // Inject the editable resume HTML into the resumeOutput div
      resumeOutput.innerHTML = resumeHTML;
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(file);
  }
});
