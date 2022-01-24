import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Rafay Qazi",
      username: "cleverqazi",
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1326566490565455872/bZ12nNne_bigger.jpg",
      text: tweetMessage,
      verified: false,
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1326566490565455872/bZ12nNne_bigger.jpg" />
          <input
            value={tweetMessage}
            placeholder="What's happening ?"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={(e) => sendTweet(e)}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
