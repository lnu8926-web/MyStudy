import { useState } from "react";
import "./ex05_flex.css";

export default function FlexEx() {
  const [contentList, setContentList] = useState(["AAA", "BBB"]);
  const [likes, setLikes] = useState([0, 0]);

  function addLikesup(idx) {
    setLikes(
      likes.map((cnt, i) => {
        if (i === idx) {
          return cnt + 1;
        }
        return cnt;
      })
    );
  }

  function resetLikes(idx) {
    setLikes(likes.map((cnt, i) => (i === idx ? 0 : cnt)));
  }

  return (
    <>
      {contentList.map((content, idx) => {
        return (
          <div className="box">
            <h2>{content}</h2>
            <div>아주 재밌어요</div>
            <button onClick={() => addLikesup(idx)}>
              {likes[idx]}
              <span> ❤️</span>
            </button>
            <button onClick={() => resetLikes(idx)}>ⅹ</button>
          </div>
        );
      })}
    </>
  );
}
