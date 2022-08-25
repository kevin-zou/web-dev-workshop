## HackCamp Cafe
This is a project created for the Everything You Need to Start as a Web Developer workshop at [HackCamp 2021](https://hackcamp.nwplus.io). It replicates a very basic online food ordering service for the fictitious cafe HackCamp Cafe. It's built using [Next.js](https://nextjs.org/) and leverages [Firebase](https://firebase.google.com/) as a database and hosting provider.

![image](https://user-images.githubusercontent.com/5078356/140621638-8847782b-6363-474f-a323-729957352f33.png)

## To get started
1. Clone this repository to your computer
2. Run `npm install` to install packages
3. Run `npm run dev` to start a local instance of the app
4. Open [http://localhost:3000](http://localhost:3000)

## Workshop Recording
[![Thumbnail of YouTube video](https://img.youtube.com/vi/tygTqDOwNgg/0.jpg)](https://www.youtube.com/watch?v=tygTqDOwNgg)

## Connecting to your own instance of Firebase
Want to connect your own database and host to your domain? You can follow the [Firebase documentation](https://firebase.google.com/docs/web/setup#create-project) to create your own Firebase project for free. After your project is created, you can add a web app to it. This will allow you to get your Firebase keys by going to your project settings.

You want to copy the `firebaseConfig` object in the code block near the end of your page. Replace the existing `firebaseConfig` in the project file `util/firebase.js`. Afterwards you can setup the [database](https://firebase.google.com/docs/firestore/quickstart) and [hosting](https://firebase.google.com/docs/hosting/quickstart) through the console or Firebase Tools CLI.
