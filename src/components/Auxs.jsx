import "./Auxs.scss";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Note from "./Note/Note";
import Story from "./Storie/Story";
import List from "./Lists/Lists";
import WriteAdd from "./Write/Write";
import HomePage from "./Home/Home";
import Header from "./Home/Header/Header.jsx";
import { useNavigate } from "react-router-dom";
import Eachlist from "./Lists/Eachlist/Eachlist";
import EachPost from "./EachPost/EachPost";
import Login from "./login/Login";




function Main() {
  let [storyObj, setStoryObj] = useState([
    {
      id: 1,
      userName: "Leon Zucchiniin Curiosity",
      title: "Ten fastest-growing apps in 2022 (including some you don’t know)",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHGMpIqXG6qdLvQPFBkynIcVdiPYWiRkEHw&usqp=CAU",
      storyBody: `So far we’ve been using a pretty standard box. But let’s be honest.. it’s not very interesting. Luckily react-three/fiber has support for importing models from Blender. For basic shapes and text you need very minimal knowledge of the program. But if you want to start using more complex shapes and features you might need to optimize models before you use them. If this is the case i recommend watching some Blender tutorials beforehand.

        I’ll be using text converted to Blender meshes as i find it very easy to work with and it can still create som pretty cool effects. Here’s a quick tutorial on converting text to meshes. Remember to export this as a .glTF file. I’ll create a curly bracket, normal bracket and angle bracket mesh in Blender.`,
      category: "Web app",
      minRead: 7,
      type: "web developer",
      publishedtime: "6 days ago",
      like: 100,
      comments: [
        {
          id: Math.floor(Math.random() * 1000),
          img: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
          userName: "messi",
          comments_text:
            "Maybe this article should be titled, “After amassing a small fortune, I left my job for a less stressful life”?",
          like: 107,
          replyes: [
            {
              id: Math.floor(Math.random() * 1000),
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxQ167kkBrscJbYVafn-ruczSpi0P2bwbKg&usqp=CAU",
              userName: "Catty",
              comments_text:
                "Hi all, I am Arup. Resident of India, from city of joy Kolkata. I love to create beautiful designs & products. Have got an engineer’s mind & an artist’s hand.",
              like: 107,
              replyes: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      userName: "Vasil Nedelchev",
      title: "$1M/Year One-man Design Agency — a Breakdown",
      img: "https://cdn5.vectorstock.com/i/1000x1000/60/34/planet-earth-on-the-digital-technology-background-vector-22436034.jpg",
      storyBody: `There is no contract
      Flat fee monthly subscription — cancel any time. Unlimited revisions. You can pause your subscription if you don’t have work at the moment.
      
      No meetings
      There is no “let’s jump on a quick call”. Just Trello. Before subscribing there is an option to have a quick call to check if there is a fit. After that is async communication using Trello and you have the option to record a Loom video.
      
      One task at a time
      Every client can have one active task at a time with unlimited revisions. Delivery is typically within two business days.`,
      category: "Web app",
      minRead: 10,
      type: "developer",
      publishedtime: "10 days ago",
      like: 120,
      comments: [
        {
          id: Math.floor(Math.random() * 1000),
          img: "https://media.istockphoto.com/videos/planet-earth-on-digital-and-technology-rotating-3d-animation-video-id1279537016?s=640x640",
          userName: "messi",
          comments_text:
            "Maybe this article should be titled, “After amassing a small fortune, I left my job for a less stressful life”?",
          like: 107,
          replyes: [
            {
              id: Math.floor(Math.random() * 1000),
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxQ167kkBrscJbYVafn-ruczSpi0P2bwbKg&usqp=CAU",
              userName: "Catty",
              comments_text:
                "Hi all, I am Arup. Resident of India, from city of joy Kolkata. I love to create beautiful designs & products. Have got an engineer’s mind & an artist’s hand.",
              like: 107,
              replyes: [],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      userName: "Vasil Nedelchev",
      title:
        "This Simple YouTube Niche is Faceless, Easy to Start, and Monetizes Quickly",
      img: "https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg",
      storyBody: `Oh, and competition doesn’t seem to matter much for this niche, either. The YouTube ecosystem is so massive, there’s room for all sorts of similar, competing channels.

      All of the channels I found in this niche have thousands to even hundreds of thousands of followers, and were all started within the last year. Some even had videos on virtually identical topics.
      
      So, what niche am I talking about?
      
      The “famous quotes” niche.
      
      Basically, it’s just a slideshow of quotes by a famous person, usually against a black or decorative backdrop, set to copyright-free music, and read either by a human voiceover, or an AI voice that sounds pretty close to human.
      
      That’s it. These videos feature quotes from all kinds of people. From celebrities like Marilyn Monroe, to writers like Oscar Wilde, philosophers like Confucius, to scientists like Albert Einstein. This niche falls mostly in the educational category, though it also crosses over with the historical, motivational and self-development niches as well.
      
      This niche has undoubtedly been around for many years, both on YouTube and on boring old static websites. But it seems to have recently experienced a bit of a resurgence. I researched four channels, and all of them have experienced significant growth in just the last few months.
      
      As a YouTube enthusiast, and someone who tries to be a “student of markets,” as legendary copywriter Gary Halbert says, I love discovering new niches. It’s fascinating to me to see the kinds of things people like. What sorts of trends suddenly become popular. And then seeing opportunistic YouTubers take advantage of those latest trends and start channels that become sucessful.
      
      Oh, and another thing. This quotes niche is also one that could be easily outsourced and automated.`,
      category: "Web app",
      minRead: 10,
      type: "Web mobile",
      publishedtime: "4 days ago",
      like: 43,
      comments: [],
    },
    {
      id: 4,
      userName: "Vasil Nedelchev",
      title:
        "The Best Online Business to Start in 2022 (cheap and perfect for beginners)",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
      storyBody: `So, you want to start a business online in 2022? There is one business model that stands above the rest for complete beginners while requiring very small upfront costs to get started. Let’s dig in!

      The age of entrepreneurship has completely changed over the past few years. Gone are the days of needing massive upfront capital in order to get started (if you choose the right business, of course..), as are the days of needing to have an incredible and world altering idea.
      
      Don’t get me wrong, we need the Elon Musk’s and the like to drive massive innovation and push humanity forward.. but most entrepreneurs have much simpler, or dare I say, modest goals.
      
      We want to work for ourselves, we want to fire our bosses, and we want to make enough money at it to do whatever it is that we want to do instead of sitting at our desk all day working for someone else.`,
      category: "Web app",
      minRead: 10,
      type: "Web android",
      publishedtime: "40 days ago",
      like: 50,
      comments: [],
    },
  ]);

  

  let [Lists, setLists] = useState([
    {
      id: 1,
      listName: "Reading List",
      lists: [],
    },
  ]);
  let [user, setUser] = useState({
    userName: "Abdunozir",
    userEmail: "abduvaliyev@gmail.com",
  });
  let [isopened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  function opennewlistmodal() {
    setIsOpened(!isopened);
    navigate("/list");
  }

  return (
    <div className="main">
      <Header />
      <Login setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              opennewlistmodal={opennewlistmodal}
              setLists={setLists}
              Lists={Lists}
              storyObj={storyObj}
              setStoryObj={setStoryObj}
               
              
            />
          }
        />
        <Route path="note" element={<Note />} />
        <Route path="story" element={<Story />} />
        <Route
          path="list"
          element={
            <List isopened={isopened} setLists={setLists} Lists={Lists} />
          }
        />
        <Route path="/writer" element={<WriteAdd />} />
        <Route
          path="/bookmark/:id"
          element={<Eachlist setLists={setLists} Lists={Lists} />}
        />
        <Route
          path="/post/:id"
          element={
            <EachPost
              setLists={setLists}
              Lists={Lists}
              storyObj={storyObj}
              setStoryObj={setStoryObj}
              user={user}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
