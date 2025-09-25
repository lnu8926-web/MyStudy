function Info(name, age) {
  return (
    <h1>
      {name}은 {age}살 입니다.
    </h1>
  );
}

export default function InfoList() {
  return (
    <>
      <Info name="Alice" age={25} />
      <Info name="YOA" age={30} />
      <Info name="Bob" age={26} />
      <Info name="PETET" age={15} />
    </>
  );
}
