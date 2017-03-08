/*
This is empty on purpose! Your code to build the resume will go here.
 */

var $header = $('#header')
var $topContacts = $('#topContacts')
var $workExperience = $('#workExperience')

var work = {
  jobs: [{
    employer: 'Radida',
    title: 'Front end Developer',
    location: 'Beijing',
    dates: '2014.12-2017.4',
    description: 'Handle Front end'
  }]
}
var projects = {
  projects: [{
    title: 'Leader',
    dates: '2015.1-2015-6',
    description: 'Working hard',
    images: 'images/fry.jpg'
  }]
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
append($header, HTMLskillsStart, '')
bio.skills.forEach(function(v){
  append($header, HTMLskills, v)
})
append($workExperience, HTMLworkStart)

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