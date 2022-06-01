import "./EachPost.scss";
import EachPostBody from "./EachPostBody/EachPostBody";
import LikeCommentsInPost from "./LikeCommentsInPost/LikeCommentsInPost";
import EachPostHeader from "./EachPostHeader/EachPostHeader";

function EachPost({ storyObj, setStoryObj, Lists }) {
  return (
    <div className="eachPost">
      <EachPostHeader storyObj={storyObj} Lists={Lists} />
      <EachPostBody storyObj={storyObj} />
      {/* <LikeCommentsInPost storyObj={storyObj} setStoryObj={setStoryObj} /> */}
    </div>
  );
}

export default EachPost;
