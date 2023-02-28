---
title: "Tagger for Letterboxd"
summary: "A web extension allowing users to automate the process of tagging films on Letterboxd."
img: "/tagger.png"
---
'Tagger for Letterboxd' is a web extension that allows users to automate the process of tagging films on Letterboxd. It is available for Google Chrome.

**What problem did I set out to fix?**

Letterboxd is a social network for film lovers and it allows you to write reviews and tag them with keywords. Some users, including myself, tag their reviews with the films genre. However, this can be a time consuming process. I wanted to create a tool that would allow me to tag my reviews with the films genre automatically.

**How did I build it?**

This project consisted of two parts - a web extension and a backend server to communicate with the TMDb API. I built the web extension using JavaScript and the backend server using Node.js and Express.

As this was one of my first projects fetching data from an API, I had to learn how RESTful requests worked. Once I had a firm grasp on this, I read through the TMDb API documentation and started work on the extension. The extension used the Chrome API to interact with the DOM and add a button to the review page. I made sure the button used the same CSS as the other buttons native to the website. Once the button was clicked, the extension would scrape the film title from the page and send a request to the backend server. The backend server then sent a request to the TMDb API and returned the film's genre IDs to the extension, which matched the IDs to genre strings and added them to the review.

**What was the most challenging part of the project?**

Whilst developing the extension, I learnt I had to hide my API key from the public. This was a challenge as I had to find a way for my extension to communicate with the TMDb API without exposing my key. I solved this by creating a backend server that would act as a middleman between the extension and the API. This meant I could hide my API key on the server and only expose the server to the public.

**What did I learn?**

I learnt how to make API requests and how to use the Chrome API to interact with the DOM. I also learnt how to use the Express framework to create a backend server. The backend server was a new concept to me and meant I also had to learn about DigitalOcean and how to deploy a Node.js application on a VPS droplet.

**What will I do differently next time?**

As this was my first 'big' project, I've since learnt a lot more about web development and how to structure my code. If I were to start the project again, I would ensure my code was more streamlined and ensure I made better use of functions to avoid repetative code.