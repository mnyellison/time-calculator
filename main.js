const inputStartTime = document.getElementById('start-time');
const inputEndTime = document.getElementById('end-time');
const btnStartTime = document.getElementById('btn-start-time');
const btnEndTime = document.getElementById('btn-end-time');
const btnCalculate = document.getElementById('btn-calculate');

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
        const startMinutes = toMinutes(startTime);
        const endMinutes = toMinutes(endTime);

        const totalMinutes = endMinutes - startMinutes;

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        const duration = `${hours}h e ${minutes}min`;
        
        console.log(duration);
    } else {
        alert("Por favor, preencha todos os campos e tente novamente.");
    }
};

btnStartTime.addEventListener('click', () => {
    setCurrentTime(inputStartTime);
});
btnEndTime.addEventListener('click', () => {
    setCurrentTime(inputEndTime);
});
btnCalculate.addEventListener('click', calculateTime);