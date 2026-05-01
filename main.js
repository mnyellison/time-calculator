const inputStartTime = document.getElementById('start-time');
const inputEndTime = document.getElementById('end-time');
const btnStartTime = document.getElementById('btn-start-time');
const btnEndTime = document.getElementById('btn-end-time');
const btnCalculate = document.getElementById('btn-calculate');
const btnReset = document.getElementById('btn-reset');
const resultCard = document.querySelector('.result-card');
const hourResultSpan = document.querySelector('.result-card__value-hour');
const minutesResultSpan = document.querySelector('.result-card__value-minutes');
const totalMinutesResult = document.querySelector('.result-card__total-value');

const setCurrentTime = (input) => {
    const now = new Date();

    const hour = now.getHours();
    const minutes = now.getMinutes();
    const formatted = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    input.value = formatted;
};

const toMinutes = (timeString) => {
    const parts = timeString.split(':');

    const hour = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);

    return hour * 60 + minutes;
};

const calculateTime = () => {
    const startTime = inputStartTime.value;
    const endTime = inputEndTime.value;

    if ((startTime !== "") && (endTime !== "")) {
        resultCard.classList.remove('is-hidden');

        const startMinutes = toMinutes(startTime);
        const endMinutes = toMinutes(endTime);

        const totalMinutes = endMinutes - startMinutes;

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        const resultHour = String(hours).padStart(2, '0');
        const resultMinutes = String(minutes).padStart(2, '0');
        
        hourResultSpan.innerHTML = resultHour;
        minutesResultSpan.innerHTML = resultMinutes;
        totalMinutesResult.innerHTML = totalMinutes;
    } else {
        alert("Por favor, preencha todos os campos e tente novamente.");
    }
};

const removeCard = () => {
    resultCard.classList.add('is-hidden');
};

btnStartTime.addEventListener('click', () => {
    setCurrentTime(inputStartTime);
});
btnEndTime.addEventListener('click', () => {
    setCurrentTime(inputEndTime);
});
btnCalculate.addEventListener('click', calculateTime);
btnReset.addEventListener('click', removeCard);