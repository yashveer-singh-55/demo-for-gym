// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// GSAP Entrance Animations & Stat Counters
gsap.from(".hero-content", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out"
});

const counters = document.querySelectorAll('.counter-num');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    gsap.to(counter, {
        scrollTrigger: {
            trigger: counter,
            start: "top 90%"
        },
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out"
    });
});

// Real-Time Shift Tracker Engine
function checkGymStatus() {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');

    if (!statusDot || !statusText) return;

    const now = new Date();
    const day = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const morningStart = 5 * 60;          // 5:00 AM
    const morningEnd = 10 * 60 + 30;      // 10:30 AM
    const eveningStart = 16 * 60;         // 4:00 PM
    const eveningEnd = 21 * 60;           // 9:00 PM

    if (day === 0) {
        statusDot.className = "w-3 h-3 rounded-full bg-red-500";
        statusText.innerText = "CLOSED TODAY (SUNDAY RECOVERY)";
    } else if (
        (currentMinutes >= morningStart && currentMinutes <= morningEnd) ||
        (currentMinutes >= eveningStart && currentMinutes <= eveningEnd)
    ) {
        statusDot.className = "w-3 h-3 rounded-full bg-brandBlue animate-pulse";
        statusText.innerText = "OPEN NOW • WORKOUT SHIFT ACTIVE";
        statusText.className = "text-brandBlue font-bold";
    } else {
        statusDot.className = "w-3 h-3 rounded-full bg-brandRed";
        statusText.innerText = "CLOSED NOW (NEXT SHIFT OPENS SOON)";
    }
}

checkGymSt
         atus();
