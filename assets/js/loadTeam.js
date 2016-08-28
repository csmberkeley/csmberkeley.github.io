$(document).ready(function() {
  var team = [
    {
      "name": "Tiffany Qi",
      "img": "tiffany.jpg",
      "position": "President"
    },

    {
      "name": "Kenneth Zhou",
      "img": "kenneth.jpg",
      "position": "Internal Vice President"
    },

    {
      "name": "Ricky Liang",
      "img": "ricky.jpg",
      "position": "External Vice President"
    },

    {
      "name": "Allan Tang",
      "img": "allan.jpg",
      "position": "Head Senior Mentor"
    },

    {
      "name": "Alex Takahashi",
      "img": "alex-takahashi.jpg",
      "position": "Social Organizer"
    },

    {
      "name": "Mike Aboody",
      "img": "mike.jpg",
      "position": "Social Organizer & 61A Senior Mentor"
    },

    {
      "name": "Katya Stukalova",
      "img": "katya.jpg",
      "position": "Social Organizer & 61A Senior Mentor"
    },

    {
      "name": "Alex Zhang",
      "img": "alex_z.jpg",
      "position": "Communications & 61A Senior Mentor"
    },

    {
      "name": "AC Dela Paz",
      "img": "ac.png",
      "position": "61A Senior Mentor"
    },

    {
      "name": "Anwar Baroudi",
      "img": "anwar.jpg",
      "position": "61A Senior Mentor"
    },

    {
      "name": "Colin Schoen",
      "img": "colin.jpg",
      "position": "61A Senior Mentor"
    },

    {
      "name": "Fahad Kamran",
      "img": "fahad.jpg",
      "position": "61A Senior Mentor"
    }
  ];

  var addTeamMember = function(element, index, array) {
    var member = $('<div class="member col l3 m4 s12">');
    var name = $('<p class="member-name">');
    var position = $('<p class="member-position">');
    var img = $('<img class="responsive-img" width="200px" src=\"../assets/img/people/' + element['img'] + '\">');

    name.text(element["name"]);
    position.text(element["position"]);

    member.append(img);
    member.append(name);
    member.append(position);
    $('.team-display').append(member);
  };

  team.forEach(addTeamMember);
});