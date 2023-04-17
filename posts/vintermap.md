---
title: "Vinter Map"
summary: "An interactive web map built using Leaflet.js for the video-game ‘Longvinter’."
date: "2023-01-03"
link: "https://vintermap.co"
img: "/vintermap.png"
---
'Vinter Map' is an interactive web map built using Leaflet.js for the video-game ‘Longvinter’. It's used to display the locations of the game's various locations and items to help players navigate the game world and complete objectives. It is available at [vintermap.co](https://vintermap.co/) and the source code is available on [my GitHub](https://github.com/wosps/vintermap).

**What problem did I set out to fix?**

'Longvinter' is an early-access video-game with a growing community and, as such, the information available online is very limited. The project began after I saw a group of users in the game's Discord server using a static image of the map to find in-game items. As the game doesn't include a map, the community had created a few image guides to locate items and navigate the world. This was a good start, but I wanted to create something more interactive and user-friendly.

**How did I build it?**

I started by reading up and learning more about Leaflet.js. Whilst this was my first time using the library, there were a few resources online that helped me get started. Longvinter's community were kind enough to provide me with an high-resolution image of the map and a folder of icons for the various items in the game. I used Photoshop to slice the image into tiles of variable zoom levels and used the icons to create a JSON file containing the coordinates of each item. I then used the Leaflet.js API to create a web map and add the tiles and markers to the map.

The UI was built using HTML and CSS, with added interactivity using JavaScript. I made each button toggle a different icon layer on the map, allowing users to switch between the different items types they were looking to find. Using JavaScript and CSS, I also added information about each item which appears when the user hovers over the marker.

**What was the most challenging part of the project?**

The most challenging part of the project was deciding the best way to store the data for each item. I was initially storing each instance of an icon as a seperate array, containing the name, icon and coordinates of that instance. However, this meant I had a lot duplicate information and I had to write a lot of repetitive code to add each item to the map. I solved this by creating an array of objects which each stored one item, it's icon and every set of coordinates for that item. This meant I could loop through the array and add each item to the map with a single line of code.

**What did I learn?**

Creating Vinter Map taught me a lot about Leaflet.js and, while it may not be something I use often, the learning process was very rewarding. I also learnt about different ways to store data and how each method can be used to solve different problems.

**What will I do differently next time?**

If I were to start this project again, I would make use of a framework such as React.js to create the UI. I would also make use of a database to store the data for each item, as this would make it easier to add new items and update the map in the future.