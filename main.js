/* 1회차부터 12회차까지 모든 훈련 데이터와 성우 오디오 타이밍 세팅 */
const allSessions = {
    1: [
        { name: "웜업 (걷기)", time: 240, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 60, type: "run", audio: "run" },
        { name: "보통 속도 걷기", time: 60, type: "walk", audio: "walk" },
        { name: "천천히 달리기", time: 60, type: "run", audio: "run" },
        { name: "보통 속도 걷기", time: 60, type: "walk", audio: "walk" },
        { name: "천천히 달리기", time: 60, type: "run", audio: "run" },
        { name: "보통 속도 걷기", time: 60, type: "walk", audio: "walk" },
        { name: "천천히 달리기", time: 60, type: "run", audio: "run" },
        { name: "보통 속도 걷기", time: 60, type: "walk", audio: "walk" },
        { name: "천천히 달리기", time: 120, type: "run", audio: "run" },
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "천천히 달리기", time: 120, type: "run", audio: "run" },
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 180, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" }
    ],
    2: [ 
        { name: "웜업 (걷기)", time: 240, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 120, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 60, type: "walk", audio: "walk" },
        { name: "천천히 달리기", time: 180, type: "run", audio: "run" },
        { name: "보통 속도 걷기", time: 60, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 180, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    3: [ 
        { name: "웜업 (걷기)", time: 240, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 180, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 60, type: "walk", audio: "walk" },
        { name: "천천히 달리기", time: 240, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    4: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 300, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 300, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    5: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 420, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 420, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    6: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 600, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 600, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    7: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 720, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 720, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    8: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 900, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 900, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    9: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 1200, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 1200, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    10: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 1500, type: "run", audio: "run" }, 
        { name: "보통 속도 걷기", time: 120, type: "walk", audio: "walk" },
        { name: "마지막 달리기", time: 1500, type: "run", audio: "run" },
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    11: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기", time: 1680, type: "run", audio: "run" }, 
        { name: "쿨다운 (걷기)", time: 180, type: "walk", audio: "cooldown" } 
    ],
    12: [ 
        { name: "웜업 (걷기)", time: 180, type: "walk", audio: "start" }, 
        { name: "천천히 달리기 30분", time: 1800, type: "run", audio: "run" }, 
        { name: "쿨다운 (걷기)", time: 300, type: "walk", audio: "cooldown" } 
    ]
};

let currentSelectedCourse = 0;
let currentPlan = [];
let currentStageIndex = 0;
let currentIntervalTime = 0;
let totalTimeRemaining = 0;
let timerInterval;
let isPaused = false;
let currentAudioPlayer = null; 
let audioCtx;

document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggle = document.getElementById('themeToggle');
    const calendarScreen = document.getElementById('calendarScreen');
    const timerScreen = document.getElementById('timerScreen');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');

    function loadStamps() {
        let completedCourses = JSON.parse(localStorage.getItem('joyRunRecords') || '[]');
        const allButtons = document.querySelectorAll('.course-btn');
        
        allButtons.forEach((btn, index) => {
            const courseNum = index + 1;
            
            if (completedCourses.includes(courseNum)) {
                btn.classList.add('done');
                if (!btn.querySelector('.completed-stamp')) {
                    const stamp = document.createElement('div');
                    stamp.className = 'completed-stamp';
                    stamp.innerText = 'CLEAR';
                    btn.appendChild(stamp);
                }
            }
        });
    }
    loadStamps();

    themeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.textContent = '다크 모드';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '라이트 모드';
        }
    });

    startBtn.addEventListener('click', () => {
        // ★스마트폰에서 비프음이 씹히지 않도록 강제 활성화시키는 마법의 코드
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        currentPlan = allSessions[currentSelectedCourse];
        if(!currentPlan) {
            alert("해당 회차의 훈련표 데이터가 아직 작성되지 않았습니다!");
            return;
        }

        calendarScreen.style.display = 'none';
        document.getElementById('actionArea').style.display = 'none';
        timerScreen.style.display = 'block';
        currentStageIndex = 0;
        
        totalTimeRemaining = currentPlan.reduce((total, stage) => total + stage.time, 0);
        currentIntervalTime = currentPlan[0].time;
        
        updateTimerUI();
        playVoice('start');
        
        timerInterval = setInterval(() => {
            if (!isPaused) {
                currentIntervalTime--;
                totalTimeRemaining--;

                // 3초, 2초, 1초 남았을 때 짤막한 비프음 발생
                if (currentIntervalTime === 3 || currentIntervalTime === 2 || currentIntervalTime === 1) {
                    playBeep('short');
                }
                
                // 시간이 다 되었을 때(0초) 길게 비프음 발생 및 다음 스테이지로 넘어감
                if (currentIntervalTime <= 0) {
                    playBeep('long');
                    currentStageIndex++;
                    
                    if (currentStageIndex >= currentPlan.length) {
                        clearInterval(timerInterval);
                        playVoice('finish', () => {
                            let completedCourses = JSON.parse(localStorage.getItem('joyRunRecords') || '[]');
                            if (!completedCourses.includes(currentSelectedCourse)) {
                                completedCourses.push(currentSelectedCourse);
                                localStorage.setItem('joyRunRecords', JSON.stringify(completedCourses));
                            }
                            alert(`수고하셨습니다! ${currentSelectedCourse}회차 도장이 찍혔습니다!`);
                            location.reload();
                        });
                        return;
                    }
                    
                    let nextAudioType = currentPlan[currentStageIndex].audio;
                    if(nextAudioType) {
                        playVoice(nextAudioType);
                    }

                    currentIntervalTime = currentPlan[currentStageIndex].time;
                }
                updateTimerUI();
            }
        }, 1000);
    });

    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
            pauseBtn.textContent = "다시 시작";
            pauseBtn.style.backgroundColor = "#27ae60";
            playVoice('pause');
        } else {
            pauseBtn.textContent = "일시 정지";
            pauseBtn.style.backgroundColor = "#555";
            playVoice('resume');
        }
    });

    stopBtn.addEventListener('click', () => {
        const wasPaused = isPaused;
        isPaused = true; 

        playVoice('ask_stop', () => {
            setTimeout(() => {
                if (confirm("정말 운동을 종료하시겠습니까? (종료하면 도장이 찍히지 않습니다)")) {
                    clearInterval(timerInterval);
                    playVoice('stop', () => {
                        location.reload(); 
                    });
                } else {
                    isPaused = wasPaused;
                    playVoice('continue');
                }
            }, 100);
        });
    });

});

function selectCourse(e, courseNumber, minutes) {
    currentSelectedCourse = courseNumber;
    const allButtons = document.querySelectorAll('.course-btn');
    
    allButtons.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    document.getElementById('actionArea').style.display = 'block';
    document.getElementById('calendarScreen').style.paddingBottom = "100px";
    
    document.getElementById('selectedCourseText').innerHTML = `현재 선택: <strong>${courseNumber}회차 (총 ${minutes}분 코스)</strong>`;
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateTimerUI() {
    document.getElementById('intervalTimeDisplay').textContent = formatTime(currentIntervalTime);
    document.getElementById('totalTimeDisplay').textContent = formatTime(totalTimeRemaining);
    
    const stage = currentPlan[currentStageIndex];
    if(!stage) return; 

    document.getElementById('currentStageText').textContent = stage.name;
    const appContainer = document.getElementById('appContainer');
    appContainer.className = 'container ' + (stage.type === 'run' ? 'run-mode' : 'walk-mode');

    if (currentStageIndex + 1 < currentPlan.length) {
        const nextStage = currentPlan[currentStageIndex + 1];
        document.getElementById('nextStageText').textContent = `다음: ${nextStage.name} (${Math.floor(nextStage.time / 60)}분)`;
    } else {
        document.getElementById('nextStageText').textContent = "다음: 운동 완료!";
    }
}

// 삐- 소리를 내는 오디오 엔진
function playBeep(type) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'short') {
        osc.frequency.value = 400; 
        gain.gain.value = 0.1;
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15); 
    } else if (type === 'long') {
        osc.frequency.value = 800; 
        gain.gain.value = 0.15;
        osc.start();
        osc.stop(audioCtx.currentTime + 0.6);
    }
}

// 성우 음성 파일 재생기
function playVoice(fileName, callback) {
    if (currentAudioPlayer) {
        currentAudioPlayer.pause();
        currentAudioPlayer.currentTime = 0;
    }
    
    // ★수정된 부분: 올려주신 캡처 이미지에 맞춰 폴더 이름을 'sounds'로 완벽하게 일치시켰습니다!
    currentAudioPlayer = new Audio(`sounds/${fileName}.mp3`);
    
    currentAudioPlayer.play().catch(error => {
        console.warn(`${fileName}.mp3 파일 재생 실패:`, error);
        if(callback) callback(); 
    });

    currentAudioPlayer.onended = () => {
        if (callback) callback();
    };
}