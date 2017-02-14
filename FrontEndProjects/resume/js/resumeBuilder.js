var work = {
    "jobs": [{
            "employer": "Infusionsoft",
            "title": "Intern",
            "location": "Chandler, AZ",
            "dates": "05/2016 - 08/2016",
            "description": "Here is the descriptions"
        },
        {
            "employer": "Apple",
            "title": "AppleCare",
            "location": "Gilbert, AZ",
            "dates": "03/2015 - 05/2016",
            "description": "Here is the descriptions"
        },
        {
            "employer": "US Airways",
            "title": "Intern",
            "location": "Tempe, AZ",
            "dates": "09/2013 - 01/2015",
            "description": "Here is the descriptions"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "PLPTool Capstone",
            "dates": "08/2015 - 06/2016",
            "description": "Here will go descriptions",
            "images": "http://placehold.it/200x200"
        },
        {
            "title": "PickUpPros",
            "dates": "01/2017 - Present",
            "description": "My own website I am building",
            "images": "http://placehold.it/200x200"
        }
    ]
};

var bio = {
    "name": "Elliott Hawks",
    "role": "Web Developer",
    "welcomeMessage": "My name is Elliott Hawks and I am a recent grad looking to prove myself as a Front End Web Developer. I graduated with a Bachelor's Degree in Software Engineering from ASU and am looking to become part of a team where and I can grow and learn.",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "925-360-8980",
        "email": "Elliott.Hawks@gmail.com",
        "github": "ehawks",
        "location": "Gilbert, AZ"
    },
    "skills": ["HTML, JavaScript, CSS, jQuery Java, C++, C, Polymer, mySQL", "GitHub, Eclipse, Intellij IDEA, Scrumwise, Jira", "Agile Methodoligies, Bi-Lingual: English/Spanish, Excellent Communication", "Teachable, Desire to Learn, Eagle Scout"]
};

var education = {
    "schools": [{
            "name": "Arizona State University",
            "location": "Tempe, AZ",
            "degree dates": "06/2016",
            "url": "https://www.asu.edu",
            "majors": ["BA Software Engineering"]
        },
        {
            "name": "Chandler Gilbert Community College",
            "location": "Chandler, AZ",
            "degree dates": "06/2012",
            "url": "https://www.cgc.maricopa.edu",
            "majors": ["AS Science"]
        }
    ]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#header").append(HTMLbioPic.replace("%data%", "images/profile_pic.jpg"));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

bio.display = function() {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill;

        for (i = 0; i < bio.skills.length; i++) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}

work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedEmployerTitle);
    }

}

function inName(name) {
    var splitNames = name.trim().split(" ");
    splitNames[1] = splitNames[1].toUpperCase();
    splitNames[0] = splitNames[0].slice(0, 1).toUpperCase() + splitNames[0].slice(1).toLowerCase();
    var internationalizedName = splitNames[0] + " " + splitNames[1];
    return internationalizedName;
}

projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
    }
}

bio.display();
work.display();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
