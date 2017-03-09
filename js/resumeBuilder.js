/*
This is empty on purpose! Your code to build the resume will go here.
 */

var $header = $('#header')
var $topContacts = $('#topContacts')
var $workExperience = $('#workExperience')
var $projects = $('#projects')
var $mapDiv = $('#mapDiv')

var work = {
  jobs: [{
    employer: 'Radida',
    title: 'Front end Developer',
    location: 'Beijing',
    dates: '2014.12-2017.4',
    description: 'Handle Front end'
  }, {
    employer: 'Medees',
    title: 'PHP Developer',
    location: 'Luoyang',
    dates: '2013.12-2014.11',
    description: 'Working Hard'
  }]
}
var projects = {
  projects: [{
    title: 'Software',
    dates: '2015.1-2015.6',
    description: 'Working hard & this is a good story but not very sad and terrific',
    image: 'images/fry.jpg'
  }, {
    title: 'Website',
    dates: '2015.7-2015.12',
    description: 'Official Website',
    image: 'images/fry.jpg'
  }],
  display: function () {
    this.projects.forEach(function(val){
      var entry = $(HTMLprojectStart)
      append(entry, HTMLprojectTitle, val.title)
      append(entry, HTMLprojectDates, val.dates)
      append(entry, HTMLprojectDescription, val.description)
      append(entry, HTMLprojectImage, val.image)
      $projects.append(entry)
    })
  }
}
var bio = {
  name: 'savo',
  role: 'Web Developer',
  welcomeMessage: 'Hello savo',
  biopic: 'images/fry.jpg',
  contacts: {
    mobile: 13934223456,
    email: 'jaynaruto@qq.com',
    github: 'savokiss',
    twitter: '@savokiss',
    location: 'Beijing'
  },
  skills: ['AngularJS', 'VueJS', 'NodeJS']
}

var education = {
  schools: [{
    name: 'ZZULI',
    location: 'Henan, Zhengzhou',
    degree: 'Master',
    dates: '2010.9-2014.7',
    url: 'http://zzuli.edu.cn',
    majors: ['Network', 'Computer Science'],
    onlineCourses: [{
      title: 'JavaScript Basic',
      school: 'Udacity',
      dates: '2017.2-2017.6',
      url: 'http://udacity.com'
    }]
  }]
}

prepend($header, HTMLheaderRole, bio.role)
prepend($header, HTMLheaderName, bio.name)
for(var i in bio.contacts) {
  appendContact(i, bio.contacts[i])
}
append($header, HTMLbioPic, bio.biopic)
append($header, HTMLwelcomeMsg, bio.welcomeMessage)
append($header, HTMLskillsStart)
bio.skills.forEach(function(v){
  append($header, HTMLskills, v)
})

// display projects
projects.display()

// show map
// $mapDiv.append(googleMap)

work.jobs.forEach(function(v){
  var $workEntry = $(HTMLworkStart).clone()
  
  append($workEntry, replace(HTMLworkEmployer, v.employer) + replace(HTMLworkTitle, v.title))
  append($workEntry, HTMLworkDates, v.dates)
  append($workEntry, HTMLworkLocation, v.location)
  append($workEntry, HTMLworkDescription, v.description)
  $workExperience.append($workEntry)
})

function replace(template, variable) {
  return template.replace('%data%', variable)
}
function prepend (container, template, variable, field) {
  var data = field ? field : 'data'
  container.prepend(template.replace('%'+ data +'%', variable))
}

function append (container, template, variable, field) {
  var data = field ? field : 'data'
  container.append(template.replace('%'+ data +'%', variable))
}

function appendContact(name, value){
  $topContacts.append(HTMLcontactGeneric.replace('%contact%', name).replace('%data%', value))
}

$(document).click(function(loc){
  logClicks(loc.pageX, loc.pageY)
})