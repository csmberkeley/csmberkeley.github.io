"""
Generates JSON to be fed into bios-controller.js. On OSX, just run "python3 gen_exec_bios.py | pbcopy"
to copy the output to clipboard.
"""

import json
import csv

execs = [
  {
    "name": "Jason Goodman",
    "img": "jason-exec.jpg",
    "position": "President"
  },
  {
    "name": "Chris Allsman",
    "img": "chris-exec.jpg",
    "position": "Internal Vice President"
  },
  {
    "name": "Suraj Rampure",
    "img": "suraj-exec-sp19.png",
    "position": "External Vice President"
  },
  {
    "name": "Yiling Kao",
    "img": "yiling-kao-square.jpg",
    "position": "Communications"
  },
  {
    "name": "Jose Chavez",
    "img": "jose-chavez-exec.jpg",
    "position": "Socials Chair"
  },
  {
    "name": "Jonathan Shi",
    "img": "jonathan-shi-exec.jpg",
    "position": "Tech Chair"
  },
  {
    "name": "Alex Stennet",
    "img": "alex-stennet.jpg",
    "position": "CS 61A Coordinator"
  },
  {
    "name": "Catherine Cang",
    "img": "catherine-cang1.jpg",
    "position": "CS 61A Coordinator"
  },
  {
    "name": "Alan Ton",
    "img": "alan-ton.jpeg",
    "position": "CS 61B Coordinator"
  },
  {
    "name": "Danny Chu",
    "img": "danny-exec.jpg",
    "position": "CS 61B Coordinator"
  },
  {
    "name": "Kristen Kafkaloff",
    "img": "kristen-exec.jpg",
    "position": "CS 70 Coordinator"
  },
  {
    "name": "Max Ovsiankin",
    "img": "max-ovsiankin-square.jpeg",
    "position": "CS 70 Coordinator"
  },
  {
    "name": "Michelle Mao",
    "img": "michelle-mao-exec.jpg",
    "position": "EE 16A Coordinator"
  },
  {
    "name": "Dominic Carrano",
    "img": "dominic-exec.jpg",
    "position": "EE 16A Coordinator"
  },
  {
    "name": "Katherine Liu",
    "img": "katherine-liu-exec.jpg",
    "position": "CS 61C Coordinator"
  },
  {
    "name": "Daniel Zhang",
    "img": "daniel-zhang-exec.jpg",
    "position": "CS 61C Coordinator"
  },
  {
    "name": "Alex Kassil",
    "img": "alex-kassil.png",
    "position": "CS 88 Coordinator"
  },
  {
    "name": "Chae Park",
    "img": "chae-exec.jpg",
    "position": "CS 88 Coordinator"
  },
  {
    "name": "Aditya Baradwaj",
    "img": "aditya.jpg",
    "position": "Advisor"
  },
  {
    "name": "Jerry Huang",
    "img": "jerry-exec.jpg",
    "position": "Advisor"
  },
  {
    "name": "Yannan Tuo",
    "img": "yannan-tuo-square.jpg",
    "position": "Advisor"
  },
  {
    "name": "Paul Bitutsky",
    "img": "paul-exec.jpg",
    "position": "Advisor"
  },
  {
    "name": "Varsha Ramakrishnan",
    "img": "varsha-exec-sp19.jpg",
    "position": "Advisor"
  },
  {
    "name": "Mudit Gupta",
    "img": "mudit-exec-sp19.jpg",
    "position": "Advisor"
  }
]

for e in execs:
    e['courses'] = { 'EXEC': e['position'] }
    del e['position']
    e['imgName'] = e['img']
    del e['img']

with open('bios.csv') as file:
    reader = csv.reader(file)
    for row in reader:
        # timestamp, email, preferred name, photo, bio
        for e in execs:
            if row[2] == e['name']:
                e['details'] = row[4]

print(json.dumps(execs, indent=4))
