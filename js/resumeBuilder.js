
var bio = {
  "name" : "Brent Luna",
  "role" : "Web Developer",
  "contact" : {"email" : "brentadamluna@gmail.com", "github" : "brentgsw", "location" : "Oakland, CA"},
  "picture" : "images/fry.jpg",
  "wecomeMessage" : "Hello, i'm working to become a devleoper.",
  "skills" : ["Ruby", "Rails", "Java", "Python", "JavaScript"]
}

var work = {
  "jobs" : [
  {"employer" : "CivicSolar, Inc.",
  "dates" : "2012 - 2016",
  "title" : "Account Manager",
  "location" : "San Francisco, CA",
  "description" : "-Designed and managed solar photovoltaic projects up to the system size of 600kw and $600k in value.<br>-Managed a book of accounts of more than 200 customers by providing customer service through techncial disgn assistance and pricing negotiations, managing relationships for man than 3 years."},
  {"employer" : "CivicSolar, Inc.", "dates" : "2010 - 2012", "title" : "Operations Specialist", "location" : "San Francisco, CA", "description" : "-Oversaw order flow, by managing vendor, logistical and customer relationships.<br>-Created and implemented a case ticketing system to improve communication and efficieincy between the sales and operations teams reducing resolution times by 60%.<br>-Created an order search tool in Python, which allowed sales to find similar orders, increasing order creating efficiency while providing accurate pricing guidance."}
]
}

var education = { "schools" :
  [{"name": "UC Santa Cruz",
  "degree" : "Bachelor of Arts\; Summa Cum Laude",
  "location" : "Santa Cruz, CA",
  "dates" : "2010",
  "major" : "Economics and Environmental Studies"}],
  "onlineCourses" : [{"title" : "Ojbect Oriented Programming with Java, Part 1", "school" : "University of Helsinki", "dates" : "November 2015", "url" : "http://mooc.fi/courses/2013/programming-part-1/"},
 {"title" : "Object Oriented Programming with Java, Part 2", "school" : "University of Helsinki", "dates" : "December 2015", "url" : "http://mooc.fi/courses/2013/programming-part-2/" },
 {"title" : "JavaScript Basics", "school" : "Udacity", "dates" : "April 2016", "url" : "https://www.udacity.com/course/javascript-basics--ud804"},{"title" : "How to Think Like a Computer Scientist: Learn with Python", "school" : "RuneStone Interactive", "dates" : "June 2015", "url" : "http://interactivepython.org/runestone/static/thinkcspy/index.html"}]
}

var projects = {
   "projects" : [{"title" : "Android Keyboard Switcher app", "description" : "An android app that's a shortcut for opening the IME switcher menu to be able to change input methods anywhere, quickly.", "dates" : " January 2016"}, {"title" : "Jumpstart Blogger", "description" : "Created a basic blog website using Rails.", "dates" : "April 2016"}, {"title" : "Command Line Games", "description" : "Created a variety fo command line interface games, including Hangman, Tic-Tac-Toe, Mastermind, and Battleship. The games included CPU logic so you could either play against the computer or someone else.", "dates" : "March 2016"}, {"title" : "Order Searching App", "description" : "Created a pythong based GUI to search a database of orders based on selected paramaters, returning a list of matching orders.", "dates" : "November 2014"}]
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);



    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry").append(formattedMajor);

  }

  $("#education").append(HTMLonlineClasses);
  for(course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    $(".education-entry:last").append(formattedTitle);
    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedURL);
  }
}


projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
  }
}


if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var idx = 0
  while (idx < bio.skills.length){
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[idx]);
    $("#skills").append(formattedSkills);
    idx += 1
  }
}

work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    $(".work-entry:last").append(formattedJob + formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
    $(".work-entry:last").append(formattedLocation);

  }
}

var formattedName = HTMLheaderName.replace("%data%", "Brent Luna");
var formattedRole = HTMLheaderRole.replace("%data%", "Aspiring Software Developer");
var formattedPic = HTMLbioPic.replace("%data%", "images/me.jpg")
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGit = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", "I am currently attending appAcademy in San Francisco to continue my pursuit of becoming a software developer!");
$("#header").prepend(formattedWelcome);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

education.display();
$("#header").prepend(formattedPic);

var formattedContacts = []
formattedContacts.push(formattedEmail);
formattedContacts.push(formattedGit);
formattedContacts.push(formattedLocation);

for (contact in formattedContacts) {
  $("#topContacts").append(formattedContacts[contact]);
  $("#footerContacts").append(formattedContacts[contact]);
}


projects.display();

work.display();
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function inName(name) {
  names = name.trim().split(" ");
  return names[0][0].toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
}

//$("#header").append(internationalizeButton);
