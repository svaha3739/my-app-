/* 💡 새로 변경된 부분: 1회차부터 12회차까지 모든 훈련 데이터와 성우 오디오 타이밍 완벽 세팅 */
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

const themeToggle = document.getElementById('themeToggle');
const calendarScreen = document.getElementById('calendarScreen');
const timerScreen = document.getElementById('timerScreen');
const actionArea = document.getElementById('actionArea');
const selectedCourseText = document.getElementById('selectedCourseText');
const startBtn = document.getElementById('startBtn');
const appContainer = document.getElementById('appContainer');

const currentStageText = document.getElementById('currentStageText');
const intervalTimeDisplay = document.getElementById('intervalTimeDisplay');
const totalTimeDisplay = document.getElementById('totalTimeDisplay');
const nextStageText = document.getElementById('nextStageText');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

let currentSelectedCourse = 0;
let currentPlan = [];
let currentStageIndex = 0;
let currentIntervalTime = 0;
let totalTimeRemaining = 0;
let timerInterval;
let isPaused = false;
let currentAudioPlayer = null; 

function loadStamps() {
    let completedCourses = JSON.parse(localStorage.getItem('joyRunRecords') || '[]');
    const allButtons = document.querySelectorAll('.course-btn');
    
    allButtons.forEach((btn, index) => {
        const courseNum = index + 1;
        if (!btn.querySelector('.completed-stamp')) {
            const stamp = document.createElement('div');
            stamp.className = 'completed-stamp';
            stamp.innerText = 'CLEAR';
            btn.appendChild(stamp);
        }
        if (completedCourses.includes(courseNum)) {
            btn.classList.add('done');
        }
    });
}
loadStamps();

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

let audioCtx;
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}
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

function playVoice(fileName, callback) {
    if (currentAudioPlayer) {
        currentAudioPlayer.pause();
        currentAudioPlayer.currentTime = 0;
    }
    
    currentAudioPlayer = new Audio(`sounds/${fileName}.mp3`);
    
    currentAudioPlayer.play().catch(error => {
        // mp3 파일이 아직 폴더에 없어도 에러 없이 넘어가도록 조치
        console.warn(`${fileName}.mp3 파일이 없습니다.`);
        if(callback) callback(); 
    });

    currentAudioPlayer.onended = () => {
        if (callback) callback();
    };
}

function selectCourse(courseNumber, minutes) {
    currentSelectedCourse = courseNumber;
    const allButtons = document.querySelectorAll('.course-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    actionArea.style.display = 'block';
    
    document.getElementById('calendarScreen').style.paddingBottom = "100px";
    
    selectedCourseText.innerHTML = `현재 선택: <strong>${courseNumber}회차 (총 ${minutes}분 코스)</strong>`;
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateTimerUI() {
    intervalTimeDisplay.textContent = formatTime(currentIntervalTime);
    totalTimeDisplay.textContent = formatTime(totalTimeRemaining);
    
    const stage = currentPlan[currentStageIndex];
    if(!stage) return; 

    currentStageText.textContent = stage.name;
    appContainer.className = 'container ' + (stage.type === 'run' ? 'run-mode' : 'walk-mode');

    if (currentStageIndex + 1 < currentPlan.length) {
        const nextStage = currentPlan[currentStageIndex + 1];
        nextStageText.textContent = `다음: ${nextStage.name} (${Math.floor(nextStage.time / 60)}분)`;
    } else {
        nextStageText.textContent = "다음: 운동 완료!";
    }
}

startBtn.addEventListener('click', () => {
    initAudio(); 
    
    currentPlan = allSessions[currentSelectedCourse];
    
    if(!currentPlan) {
        alert("해당 회차의 훈련표 데이터가 아직 작성되지 않았습니다!");
        return;
    }

    calendarScreen.style.display = 'none';
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

            if (currentIntervalTime === 3 || currentIntervalTime === 2 || currentIntervalTime === 1) {
                playBeep('short');
            }
            
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
        playVoice('pause');
    } else {
        pauseBtn.textContent = "일시 정지";
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