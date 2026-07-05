// src/data/foodData.js

// 화면에 보일 한글 이름(name)과 실제 사진 파일 이름(imgName)
const foodList = [
  { name: "치킨", imgName: "chicken" },
  { name: "삼겹살", imgName: "samgyeopsal" },
  { name: "소고기 구이", imgName: "beef" },
  { name: "족발", imgName: "jokbal" },
  { name: "보쌈", imgName: "bossam" },
  { name: "소곱창", imgName: "gopchang" },
  { name: "닭발", imgName: "dakbal" },
  { name: "육회", imgName: "yukhoe" },
  { name: "짜장면", imgName: "jjajangmyeon" },
  { name: "짬뽕", imgName: "jjamppong" },
  { name: "마라탕", imgName: "maratang" },
  { name: "떡볶이", imgName: "tteokbokki" },
  { name: "초밥", imgName: "sushi" },
  { name: "돈까스", imgName: "tonkatsu" },
  { name: "연어회", imgName: "salmon" },
  { name: "광어회", imgName: "flatfish" },
  { name: "국밥", imgName: "gukbap" },
  { name: "김치찌개", imgName: "kimchijjigae" },
  { name: "된장찌개", imgName: "doenjangjjigae" },
  { name: "부대찌개", imgName: "budaejjigae" },
  { name: "감자탕", imgName: "gamjatang" },
  { name: "샤브샤브", imgName: "shabushabu" },
  { name: "냉면", imgName: "naengmyeon" },
  { name: "칼국수", imgName: "kalguksu" },
  { name: "피자", imgName: "pizza" },
  { name: "햄버거", imgName: "hamburger" },
  { name: "파스타", imgName: "pasta" },
  { name: "제육볶음", imgName: "jeyuk" },
  { name: "찜닭", imgName: "jjimdak" },
  { name: "카레", imgName: "curry" },
  { name: "쌀국수", imgName: "pho" },
  { name: "샌드위치", imgName: "sandwich" }
];

export const initialFoods = foodList.map((item, index) => ({
  id: index + 1,
  name: item.name,
  src: `/images/${item.imgName}.jpg` // 실제 이미지가 있는 public/images 경로
}));