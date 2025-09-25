const numCatsSelect = document.getElementById("numCatsSelect");
const createBtn = document.getElementById("createBtn");
const createCatDiv = document.getElementById("createCat");
const gameStartDiv = document.getElementById("gameStart");
const catsContainer = document.getElementById("catsContainer");
const startRaceBtn = document.getElementById("startRaceBtn");
const raceResult = document.getElementById("raceResult");
const restartBtn = document.getElementById("restartBtn");

// 버튼 활성화/비활성화
numCatsSelect.addEventListener("change", () => {
  createBtn.disabled = !numCatsSelect.value;
});

// 생성 버튼 클릭
createBtn.addEventListener("click", () => {
  createCatDiv.style.display = "none";
  gameStartDiv.style.display = "block";
  raceResult.textContent = "";
  restartBtn.style.display = "none";
  startRaceBtn.disabled = false;

  const catCount = parseInt(numCatsSelect.value);
  catsContainer.innerHTML = "";

  for (let i = 1; i <= catCount; i++) {
    const track = document.createElement("div");
    track.className = "track";

    // 고양이 번호
    const label = document.createElement("span");
    label.textContent = `${i}번 고양이`;

    const cat = document.createElement("img");
    cat.src = "./img/calico.png"; // 고양이 이미지 경로
    cat.alt = "cat";

    track.appendChild(label);
    track.appendChild(cat);
    catsContainer.appendChild(track);
  }
});

// 출발 버튼 클릭 → 달리기 + 1등 판정 + 시간 측정
startRaceBtn.addEventListener("click", () => {
  const tracks = document.querySelectorAll(".track");
  let winner = null;
  const startTime = Date.now();

  tracks.forEach((track, index) => {
    const cat = track.querySelector("img");
    const raceDistance = track.offsetWidth - cat.offsetWidth;
    const randomTime = 2000 + Math.random() * 2000; // 2~4초 랜덤

    cat.style.transition = `left ${randomTime}ms linear`;
    cat.style.left = raceDistance + "px";

    cat.addEventListener(
      "transitionend",
      () => {
        const endTime = Date.now();
        const elapsed = ((endTime - startTime) / 1000).toFixed(2);

        // 1등 고양이 판정
        if (!winner) {
          winner = index + 1;
          raceResult.textContent = `${winner}번 고양이 승리! ⏱ ${elapsed}초`;
          restartBtn.style.display = "inline-block";
        }

        // 각 고양이 도착 시간 표시
        const label = track.querySelector("span");
        label.textContent = `${index + 1}번 고양이 - 도착 ${elapsed}초`;
      },
      { once: true }
    );
  });

  startRaceBtn.disabled = true;
});

// 다시하기 버튼
restartBtn.addEventListener("click", () => {
  gameStartDiv.style.display = "none";
  createCatDiv.style.display = "block";
  numCatsSelect.value = "";
  createBtn.disabled = true;
});
