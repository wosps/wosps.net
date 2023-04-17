---
title: "Intruder Rooms"
summary: "A room browser and profile viewer for the video game, 'Intruder'."
date: "2023-04-17"
link: "https://intruder.wosps.net"
img: "/intruder.png"
---
'Intruder Rooms' is a room browser and profile viewer for the video game, 'Intruder'. It was built using Next.js and Typescript and styled using Tailwind CSS, daisyUI and the Intruder API. It is available at [intruder.wosps.net](https://intruder.wosps.net/). The source code is available on [my GitHub](https://github.com/wosps/intruder-rooms).

**What problem did I set out to fix?**

Intruder is a great video game, but sadly it's community is very small in size. I wanted to create a tool that showed how many rooms and players were online so that other people could see when the game was active and join in. The API also allows you to access a player's profile data, which I thought would be a nice addition to the website.

**How did I build it?**

I built this project using Next.js and Typescript. I chose Next.js as it is a framework that allows you to build static websites using React. I chose Typescript as it is a superset of JavaScript that allows you to add types to your code. I used Tailwind CSS and daisyUI to style the website. I used the Intruder API to fetch the data for the website.

**What was the most challenging part of the project?**

The most challenging part of this project was learning how best to use Next.js's getStaticProps and getServerSideProps functions. I had to learn how to use them to fetch data from the API and then pass it to the components. I also decided to use Typescript, which was a new language for me. I found it very useful, but it did take some time to get used to.

**What did I learn?**

I learned how to use Next.js and Typescript, as well as the benefits of using them. Knowing the difference between getStaticProps and getServerSideProps was very useful and I will definitely use them in future projects. I also tried my best to implement a trunk-based development workflow, which I found to be very useful for managing my code and keeping my project organised.

**What would I do differently next time?**

I used an external library called [nextjs-steam-auth](https://github.com/HilliamT/nextjs-steam-auth) to handle the authentication with Steam. If I was to redo this project, I would like to implement the authentication myself using Passport.js and add a database to store the user's data. Using this, I'd be able to store user preferences and display more data from their Steam profile such as their online friends.