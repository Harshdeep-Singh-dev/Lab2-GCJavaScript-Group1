function applicant(name, location, role, yoe, education, skills, certfications, languages, portfolio, relocate, remote, soft_skills, interships){
    this.name = name;
    this.location = location;
    this.role = role;
    this.yoe = yoe;
    this.education = education;
    this.skills = skills;
    this.certfications = certfications;
    this.languages = languages;
    this.portfolio = portfolio;
    this.relocate = relocate;
    this.remote = remote;
    this.soft_skills = soft_skills;
    this.interships = interships;

    // Method to display the applicant's details
    this.displayDetails = function() {
        console.log(`Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Role: ${this.role}`);
        console.log(`Years of Experience: ${this.yoe}`);
        console.log(`Education: ${this.education}`);
        console.log(`Skills: ${this.skills.join(', ')}`);
        console.log(`Certifications: ${this.certfications.join(', ')}`);
        console.log(`Languages: ${this.languages.join(', ')}`);
        console.log(`Portfolio: ${this.portfolio}`);
        console.log(`Willing to Relocate: ${this.relocate}`);
        console.log(`Remote Work Preference: ${this.remote}`);
        console.log(`Soft Skills: ${this.soft_skills.join(', ')}`);
        console.log(`Internships: ${this.internship}`);
    };

    this.addDetailsToCard = function() {
        const card = document.querySelector('.resume-card');
        card.innerHTML = `
            <h1 class="name">${this.name}</h1>
            <p>Location: ${this.location}</p>
            <p>Role: ${this.role}</p>
            <p>Years of Experience: ${this.yoe}</p>
            <p>Education: ${this.education}</p>
            <p>Skills: ${this.skills.join(', ')}</p>
            <p>Certifications: ${this.certfications.join(', ')}</p>
            <p>Languages: ${this.languages.join(', ')}</p>
            <p>Portfolio: <a href="${this.portfolio}" target="_blank">${this.portfolio}</a></p>
            <p>Willing to Relocate: ${this.relocate ? 'Yes' : 'No'}</p>
            <p>Remote Work Preference: ${this.remote ? 'Yes' : 'No'}</p>
            <p>Soft Skills: ${this.soft_skills.join(', ')}</p>
            <p>Internships: ${this.internships ? 'Yes' : 'No'}</p>
            <button>
            Change
            </button>
        `;
    }
}

// Example usage
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

applicant1.displayDetails();
applicant1.addDetailsToCard();


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let changedValue = prompt("Enter Field you want to Change:");

    for (val in applicant1){
        if (val === changedValue) {
            let newValue = prompt(`Enter New Value for ${changedValue}:`);
            applicant1[changedValue] = newValue;
            applicant1.addDetailsToCard();
            break;
        }
    }
    let newValue = prompt("Enter New Value:");
});