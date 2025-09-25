import { useState } from "react";

export default function ObjectEx() {
  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: "",
  });
  const changeHandler = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  return (
    <>
      <h2>제목: {form.name}</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={changeHandler}
      />
      <h3>내용: {form.text}</h3>
      <input
        type="text"
        name="text"
        value={form.text}
        onChange={changeHandler}
      />
      <h3>평점: {form.rating}</h3>
      <select name="rating" value={form.rating} onChange={changeHandler}>
        <option value="">옵션선택</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
}
