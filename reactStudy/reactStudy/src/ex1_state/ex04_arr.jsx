import { useState } from "react";
//arr 좋아요 기능

export default function UseStateArr() {
  const [titleList, setTitleList] = useState(["A", "B", "C"]);
  const [thumbsup, setThumbsup] = useState([0, 0, 0]);

  function addThumbsup(idx) {
    setThumbsup(
      thumbsup.map((cnt, i) => {
        if (i === idx) {
          return cnt + 1;
        }
        return cnt;
      })
    );
  }
  return (
    <>
      {titleList.map((title, idx) => {
        return (
          <div key={idx}>
            <h2>{title}</h2>
            <button onClick={() => addThumbsup(idx)}> LIKE </button>
            <span>{thumbsup[idx]}</span>
          </div>
        );
      })}
    </>
  );
}
