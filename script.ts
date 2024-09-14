const resumeForm = document.getElementById("resume-builder") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();    //prevent page reload

    // collect input value
    const name = (document.getElementById("name") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const education1 = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // Generate the Resume content dynamically//
    const resumeHTML = `
    <h2><b>EDITABLE RESUME</b></h2>
    <h3>Personal Inforamtion<b></b></h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    
    <h3>Education:</h3>
    <p contenteditabel="true"> ${education1}</p>
  
    <h3><b>Experience:</b></h3>
    <p contenteditabel="true"> ${experience}</p>
   
     <h3><b>Skills:</b></h3>
    <p contenteditabel="true"> ${skills}</p>`;

    // Display the Generated Resume//
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The Resume display Element is missing")
    }

})
