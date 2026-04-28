const inputStartTime = document.getElementById('start-time');
const inputEndTime = document.getElementById('end-time');
const btnStartTime = document.getElementById('btn-start-time');
const btnEndTime = document.getElementById('btn-end-time');
const btnCalculate = document.getElementById('btn-calculate');

const currentTime1 = () => {
    const now = new Date();
    
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const formattedHour = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    inputStartTime.value = formattedHour;
}

const currentTime2 = () => {
    const now = new Date();
    
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const formattedHour = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    inputEndTime.value = formattedHour;
}

btnStartTime.addEventListener('click', currentTime1);
btnEndTime.addEventListener('click', currentTime2);