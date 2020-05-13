now = new Date
dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
monthName = ["janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

// options of date:
// now.getDay() + ", " + now.getDate() + " de " + now.getMonth() + " de " + now.getFullYear() 


function dateFull() {
    date = dayName[now.getDay()] + ', ' + now.getDate() + ' de ' + monthName[now.getMonth()] + ' de ' + now.getFullYear()
    return date
};

//console.log(dateFull());


module.exports = dateFull


// options of hour:
// now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds()
function hourFull() {
    hour = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    return hour
};

//console.log(hourFull());

// setInterval(function () {
//     clock.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
// }, 1000);

module.exports = hourFull