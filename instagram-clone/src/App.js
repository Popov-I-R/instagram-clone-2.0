import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase"

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from "@mui/material";

function getModalStyle() {
  const top = 50
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';





function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open,setOpen] = useState(false);


  // useEffect runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs // whatever code is here it will run it once at the refresh
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added, this code fires (Something type of trigger refresh)
    setPosts(snapshot.docs.map(doc =>({
      id: doc.id,
      post: doc.data()
    } )))
    })
  }, [] )

 const signUp = (event) => {
   
 }

  return (
    <div className="app">

<Modal
  open={open}
  onClose={() => setOpen(false)}
>
     <div style={modalStyle} className={classes.paper}>
     <center>
     <div className="app__headerImage">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="headerImage-logo"
        />
      </div>
     </center>
    </div>
</Modal>


      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="header-instagram-logo"
        />
      </div>

    <Button onClick={() => setOpen(true)}>Sign Up</Button>

      <h1>HELLO React. Lets build an Instagram Clone with React</h1>

 {
   posts.map(({id, post}) => (
     <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
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
