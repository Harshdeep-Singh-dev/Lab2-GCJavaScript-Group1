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