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

const calculateTime = () => {
    const startTime = inputStartTime.value;
    const endTime = inputEndTime.value;

    if ((startTime !== "") && (endTime !== "")) {
        const partsStartTime = startTime.split(':');
        const partsEndTime = endTime.split(':');

        const start = {
            hour: parseInt(partsStartTime[0]),
            minutes: parseInt(partsStartTime[1])
        };

        const end = {
            hour: parseInt(partsEndTime[0]),
            minutes: parseInt(partsEndTime[1])
        };

        const startTotalMinutes = start.hour * 60 + start.minutes;
        const endTotalMinutes = end.hour * 60 + end.minutes;

        const totalMinutes = endTotalMinutes - startTotalMinutes;

        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        const duration = `${hours}h e ${minutes}min`;
        
        console.log(duration);
    } else {
        alert("Por favor, preencha todos os campos e tente novamente.");
    }
}

btnStartTime.addEventListener('click', currentTime1);
btnEndTime.addEventListener('click', currentTime2);
btnCalculate.addEventListener('click', calculateTime);