var work = {
  "jobs" : [
    {
      "employer" : "Infusionsoft",
      "title" : "Intern",
      "location" : "Chandler, AZ",
      "dates" : "05/2016 - 08/2016",
      "description" : "Here is the descriptions"
    },
    {
      "employer" : "Apple",
      "title" : "AppleCare",
      "location" : "Gilbert, AZ",
      "dates" : "03/2015 - 05/2016",
      "description" : "Here is the descriptions"
    },
    {
      "employer" : "US Airways",
      "title" : "Intern",
      "location" : "Tempe, AZ",
      "dates" : "09/2013 - 01/2015",
      "description" : "Here is the descriptions"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "PLPTool Capstone",
      "dates" : "08/2015 - 06/2016",
      "description" : "Here will go descriptions",
      "images" : [
        "none"
      ]
    },
    {
      "title" : "PickUpPros",
      "dates" : "01/2017 - Present",
      "description" : "My own website I am building",
      "images" : [
        "none"
      ]
    }
  ]
};

var bio = {
  "name" : "Elliott Hawks",
  "role" : "Web Developer",
  "welcomeMessage" : "My name is Elliott Hawks and I am a recent grad looking to improve as a web developer",
  "biopic" : "images/fry.jpg",
  "contacts" : {
    "mobile" : "925-360-8980",
    "email" : "Elliott.Hawks@gmail.com",
    "github" : "ehawks",
    "location" : "Gilbert, AZ"
  },
  "skills" : ["skill1", "skill2", "skill3"]
};

var education = {
  "schools" : [
    {
      "name" : "Arizona State University",
      "location" : "Tempe, AZ",
      "degree dates" : "06/2016",
      "url" : "https://www.asu.edu",
      "majors" : ["BA Software Engineering"]
    },
    {
      "name" : "Chandler Gilbert Community College",
      "location" : "Chandler, AZ",
      "degree dates" : "06/2012",
      "url" : "https://www.cgc.maricopa.edu",
      "majors" : ["AS Science"]
    }
  ]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", "images/profile_pic.jpg"));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill;

  for(i = 0; i < bio.skills.length; i++){
    formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

  $(".work-entry:last").append(formattedEmployerTitle);

}
