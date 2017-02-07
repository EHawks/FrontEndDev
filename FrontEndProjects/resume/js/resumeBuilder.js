var formattedName = HTMLheaderName.replace("%data%", "Elliott Hawks");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
