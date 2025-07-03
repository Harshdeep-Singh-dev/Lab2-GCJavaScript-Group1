
// Declaring the function constructor for applicant
// This function will create an applicant object with various properties and methods
function applicant(name, location, role, experience, education, skills, certfications, languages, portfolio, relocate, remote, soft_skills, internships){
    this.name = name;
    this.location = location;
    this.role = role;
    this.experience = experience;
    this.education = education;
    this.skills = skills;
    this.certfications = certfications;
    this.languages = languages;
    this.portfolio = portfolio;
    this.relocate = relocate;
    this.remote = remote;
    this.soft_skills = soft_skills;
    this.internships = internships;

    // Method to display the applicant's details
    this.displayDetails = function() {
        console.log(`Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Role: ${this.role}`);
        console.log(`Experience: ${this.experience}`);
        console.log(`Education: ${this.education}`);
        console.log(`Skills: ${this.skills.join(', ')}`);
        console.log(`Certifications: ${this.certfications.join(', ')}`);
        console.log(`Languages: ${this.languages.join(', ')}`);
        console.log(`Portfolio: ${this.portfolio}`);
        console.log(`Willing to Relocate: ${this.relocate}`);
        console.log(`Remote Work Preference: ${this.remote}`);
        console.log(`Soft Skills: ${this.soft_skills.join(', ')}`);
        console.log(`Internships: ${this.internships}`);
    };

    // Method to add details to the resume card in the HTML

    this.addDetailsToCard = function() {
        const card = document.querySelector('.resume-card');
        card.innerHTML = `
            <h1 class="name">${this.name}</h1>
            <p>Location: ${this.location}</p>
            <p>Role: ${this.role}</p>
            <p>Years of Experience: ${this.experience}</p>
            <p>Education: ${this.education}</p>
            <p>Skills: ${this.skills.join(', ')}</p>
            <p>Certifications: ${this.certfications.join(', ')}</p>
            <p>Languages: ${this.languages.join(', ')}</p>
            <p>Portfolio: <a href="${this.portfolio}" target="_blank">${this.portfolio}</a></p>
            <p>Willing to Relocate: ${this.relocate}</p>
            <p>Remote Work Preference: ${this.remote}</p>
            <p>Soft Skills: ${this.soft_skills.join(', ')}</p>
            <p>Internships: ${this.internships}</p>
            <button>
            Change
            </button>
        `;
    }
}

// Creating and initializing an applicant object
let applicant1 = new applicant(
    "Emily Zhang",
    "Vancouver, BC",
    "Front-End Developer",
    2,
    "Diploma in Web Development, BCIT",
    ["HTML", "CSS", "JavaScript", "React"],
    ["Responsive Web Design (freeCodeCamp)"],
    ["English", "Mandarin"],
    "https://emilycodes.dev",
    false,
    true,
    ["Problem-solving","Time Management"],
    false
);

// Calling the display deatails and adding the details to the card
applicant1.displayDetails();
applicant1.addDetailsToCard();


// Accessing the button and adding an event listener to it
let btn = document.querySelector('button');


btn.addEventListener('click', function() {
    // changedValue is the variablr that stores the field that is to be changed
    let changedValue = prompt("Enter Field you want to Change:");

    //loop runningover keys of appilcant1 object and matching value of keys to changedValue
    for (val in applicant1){
        if (val === changedValue) {
            // newValue is the variable that stores the new value for the field
            let newValue = prompt(`Enter New Value for ${changedValue}:`);
            applicant1[changedValue] = newValue;

            // Displaying the updated details in the card
            applicant1.addDetailsToCard();
            break;
        }
    }
});