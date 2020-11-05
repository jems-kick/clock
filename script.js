const h = document.getElementById('hr');
const m = document.getElementById('min');
const s = document.getElementById('sec');
const a = document.getElementById('ampm');
const vday = document.getElementById('day');
const date = document.getElementById('date')



function time() {
    j = new Date();
    hr = j.getHours();
    min = j.getMinutes();
    sec = j.getSeconds();
    h.innerHTML = hr + ':';
    m.innerHTML = min + ':';
    s.innerHTML = sec;
}
time()
setInterval(time, 1)

function day() {
    const k = new Date();
    const day = k.getDay();
    if (day == 0) {
        vday.innerHTML = 'Sunday';
    } else if (day == 1) {
        vday.innerHTML = 'Monday';
    } else if (day == 2) {
        vday.innerHTML = 'Tuesday';
    } else if (day == 3) {
        vday.innerHTML = 'Wednesday';
    } else if (day == 4) {
        vday.innerHTML = 'Thursday';
    } else if (day == 5) {
        vday.innerHTML = 'Friday';
    } else{
        vday.innerHTML = 'Saturday';
    }
    
}

day()

function dmy() {
    const n = new Date();
    const mday = n.getDate();
    const month = n.getMonth() + 1;
    const year = n.getFullYear();
    date.innerHTML = mday + '/' + month + '/' + year;
}

dmy()


function change_formate() {
    const j = new Date();
    const hr = j.getHours();
    const min = j.getMinutes();
    const sec = j.getSeconds();
    if (hr == '13') {
        h.innerHTML = '1' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '14') {
        h.innerHTML = '2' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '15') {
        h.innerHTML = '3' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '16') {
        h.innerHTML = '4' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '17') {
        h.innerHTML = '5' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '18') {
        h.innerHTML = '6' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '19') {
        h.innerHTML = '7' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '20') {
        h.innerHTML = '8' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '21') {
        h.innerHTML = '9' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '22') {
        h.innerHTML = '10' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '23') {
        h.innerHTML = '11' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        a.innerHTML = 'pm';
    } else if (hr == '24') {
        h.innerHTML = '12' + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        if (hr >= '12'){
            a.innerHTML = 'am';
        } else {
            a.innerHTML = 'pm';
        }
    } else {
        h.innerHTML = hr + ':';
        m.innerHTML = min + ':';
        s.innerHTML = sec;
        if (hr >= '12'){
            a.innerHTML = 'pm';
        } else {
            a.innerHTML = 'am';
        }
        
    }
    setInterval(change_formate,1)
}



/**function change_formate(date) {
    j = new Date();
    sec = j.getSeconds(); 
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    if (hours == '13') {
        h.innerHTML = '1' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '14') {
        h.innerHTML = '2' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '15') {
        h.innerHTML = '3' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '16') {
        h.innerHTML = '4' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '17') {
        h.innerHTML = '5' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '18') {
        h.innerHTML = '6' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '19') {
        h.innerHTML = '7' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '20') {
        h.innerHTML = '8' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '21') {
        h.innerHTML = '9' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '22') {
        h.innerHTML = '10' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '23') {
        h.innerHTML = '11' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else if (hours == '24') {
        h.innerHTML = '12' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    } else {
        h.innerHTML = '9' + ':';
        m.innerHTML = minutes + ':';
        s.innerHTML = sec;
        a.innerHTML = ampm;
    }
   
  }

console.log(change_formate(new Date))**/


