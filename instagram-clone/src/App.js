import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase"

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs // whatever code is here it will run it once at the refresh
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added, this code fires (Something type of trigger refresh)
    setPosts(snapshot.docs.map(doc => doc.data() ))
    })
  }, [] )

  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="header-instagram-logo"
        />
      </div>
      <h1>HELLO React. Lets build an Instagram Clone with React</h1>

 {
   posts.map(post => (
     <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
   ))
 }



{/* 
      <Post
        username="Idaki Popov"
        caption="It works fine"
        imageUrl="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
      <Post
        username="Pesho"
        caption="Dope"
        imageUrl="https://wallpapercave.com/wp/wp1922510.jpg"
      /> */}
      {/* <Post
        username="Gosho"
        caption="This is a fun project"
        imageUrl="https://image.winudf.com/v2/image/Y29tLnlyY2hrb3IubmV3d2FsbHBhcGVycy5kb2dzX3NjcmVlbl82XzE1MDg4MjA1ODhfMDM1/screen-6.jpg?fakeurl=1&type=.jpg"
      /> */}

      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
