import { useState } from "react";

export default function Filter() {
  const products = [
    { name: "A", price: 10000, description: "야야야" },
    { name: "B", price: 15000, description: "호ㅕ오" },
    { name: "C", price: 300000, description: "ㅇ로ㅕㅗㅇ" },
    { name: "D", price: 499920, description: "오ㅑㅕ옴" },
    { name: "E", price: 1000000, description: "오ㅕㅑㅇ노며ㅑ" },
  ];

  const [inputPrice, setInputPrice] = useState(10000);
  const [filterPrice, setFilterPrice] = useState(10000);

  function handleApply() {
    setFilterPrice(parseInt(inputPrice));
  }
  return (
    <div>
      <h2>{filterPrice}</h2>
      <input
        type="number"
        value={inputPrice}
        onChange={(e) => setInputPrice(e.target.value)}
      />
      <button onClick={handleApply}>적용</button>
      {products
        .filter((item) => item.price < filterPrice)
        .map((item, idx) => (
          <div key={idx}>
            <h4>{item.name}</h4>
            <p>가격: {item.price}원</p>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
}
