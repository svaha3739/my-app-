/* 파일명: main.js */
// 이전 앱의 에러를 방지하고 슬로우 조깅 전용 클릭 기능을 작동시킵니다.

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. 다크 모드 스위치 기능
  const darkModeBtn = document.getElementById('darkModeBtn');
  if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      // 버튼 글씨 변경
      if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '라이트 모드';
      } else {
        darkModeBtn.textContent = '다크 모드';
      }
    });
  }

  // 2. 조깅 회차 카드 터치 시 '완료(도장)' 처리 기능
  const cards = document.querySelectorAll('main div > div');
  cards.forEach(card => {
    // 모바일 터치를 위해 마우스 포인터 모양 변경
    card.style.cursor = 'pointer';
    card.style.transition = 'all 0.2s';
    
    // 카드를 클릭(터치)하면 완료 디자인(done-card)이 켜졌다 꺼졌다 함
    card.addEventListener('click', () => {
      card.classList.toggle('done-card');
    });
  });

});