const quiz = [
  {
    question:
      "日本人の血液型で一番多いのはA型です。では、世界的に見た場合に一番多いのは何型でしょうか？",
    answers: ["A型", "B型", "O型", "AB型"],
    correct: "O型",
  },
  {
    question: "「学ラン」の「ラン」とはなんでしょうか？",
    answers: ["花のラン", "オランダ", "ランダム", "ランキング"],
    correct: "オランダ",
  },
  {
    question:
      "カップ麺に入っている「かやく」を漢字で書くとどうなるでしょうか？",
    answers: ["火薬", "化薬", "加薬", "科薬"],
    correct: "加薬",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(
      "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
