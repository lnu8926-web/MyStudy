function Info(title, author, year) {
  return (
    <>
      <h1>
        제목: {title} , 저자: {author} , 출판연도: {year}
      </h1>
    </>
  );
}

export default function InfoList() {
  return (
    <>
      <Info title="해리포터" author="j.k" year={1997} />
    </>
  );
}
