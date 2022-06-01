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
      type: "Web developer",
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
      id: 10,
      userName: "Leon Zucchiniin Curiosity",
      title: "Ten fastest-growing apps in 2022 (including some you don’t know)",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHGMpIqXG6qdLvQPFBkynIcVdiPYWiRkEHw&usqp=CAU",
      storyBody: `So far we’ve been using a pretty standard box. But let’s be honest.. it’s not very interesting. Luckily react-three/fiber has support for importing models from Blender. For basic shapes and text you need very minimal knowledge of the program. But if you want to start using more complex shapes and features you might need to optimize models before you use them. If this is the case i recommend watching some Blender tutorials beforehand.

        I’ll be using text converted to Blender meshes as i find it very easy to work with and it can still create som pretty cool effects. Here’s a quick tutorial on converting text to meshes. Remember to export this as a .glTF file. I’ll create a curly bracket, normal bracket and angle bracket mesh in Blender.`,
      category: "Web app",
      minRead: 7,
      type: "Web developer",
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
      userName: "Messi",
      title: "Ten fastest-growing apps in 2022 (including some you don’t know)",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHGMpIqXG6qdLvQPFBkynIcVdiPYWiRkEHw&usqp=CAU",
      storyBody: `So far we’ve been using a pretty standard box. But let’s be honest.. it’s not very interesting. Luckily react-three/fiber has support for importing models from Blender. For basic shapes and text you need very minimal knowledge of the program. But if you want to start using more complex shapes and features you might need to optimize models before you use them. If this is the case i recommend watching some Blender tutorials beforehand.

        I’ll be using text converted to Blender meshes as i find it very easy to work with and it can still create som pretty cool effects. Here’s a quick tutorial on converting text to meshes. Remember to export this as a .glTF file. I’ll create a curly bracket, normal bracket and angle bracket mesh in Blender.`,
      category: "Web app",
      minRead: 7,
      type: "Web developer",
      publishedtime: "6 days ago",
      like: 100,
      comments: [
        {
          id: Math.floor(Math.random() * 1000),
          img: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
          userName: "marry",
          comments_text:
            "Maybe this article should be titled, “After amassing a small fortune, I left my job for a less stressful life”?",
          like: 107,
          replyes: [
            {
              id: Math.floor(Math.random() * 1000),
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxQ167kkBrscJbYVafn-ruczSpi0P2bwbKg&usqp=CAU",
              userName: "mery",
              comments_text:
                "Hi all, I am Arup. Resident of India, from city of joy Kolkata. I love to create beautiful designs & products. Have got an engineer’s mind & an artist’s hand.",
              like: 107,
              replyes: [],
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 1000),
          img: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
          userName: "marry",
          comments_text:
            "Maybe this article should be titled, “After amassing a small fortune, I left my job for a less stressful life”?",
          like: 107,
          replyes: [
            {
              id: Math.floor(Math.random() * 1000),
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxQ167kkBrscJbYVafn-ruczSpi0P2bwbKg&usqp=CAU",
              userName: "mery",
              comments_text:
                "Hi all, I am Arup. Resident of India, from city of joy Kolkata. I love to create beautiful designs & products. Have got an engineer’s mind & an artist’s hand.",
              like: 107,
              replyes: [],
            },
          ],
        },
        {
          id: Math.floor(Math.random() * 1000),
          img: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg",
          userName: "marry",
          comments_text:
            "Maybe this article should be titled, “After amassing a small fortune, I left my job for a less stressful life”?",
          like: 107,
          replyes: [
            {
              id: Math.floor(Math.random() * 1000),
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxQ167kkBrscJbYVafn-ruczSpi0P2bwbKg&usqp=CAU",
              userName: "mery",
              comments_text:
                "Hi all, I am Arup. Resident of India, from city of joy Kolkata. I love to create beautiful designs & products. Have got an engineer’s mind & an artist’s hand.",
              like: 107,
              replyes: [],
            },
          ],
        },
      ],
    },
  ]);

  let [Lists, setLists] = useState([
    {
      id: 1,
      listName: "Reading List",
      lists: [],
    },
  ]);
  let [user, setUser] = useState({});
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
        <Route path="writer" element={<WriteAdd />} />
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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
