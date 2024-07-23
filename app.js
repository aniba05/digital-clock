const getElementValueInId = (elem)=>{
    const elementValue = document.getElementById(elem);
    return elementValue;
}
const getElementValueInClass = (elem)=>{
    const elementValue = document.querySelector(elem);
    return elementValue;
}

setInterval(() => {
    let hours = getElementValueInId('hours');
    let minutes = getElementValueInId('minutes');
    let secondes = getElementValueInId('seconds');
    let ampm = getElementValueInId('ampm');
  
  
    let hh = getElementValueInId('hh');
    let mm = getElementValueInId('mm');
    let ss = getElementValueInId('ss');
  
  
   
    let dotH = getElementValueInClass('.h_dot');
    let dotM = getElementValueInClass('.m_dot');
    let dotS = getElementValueInClass('.s_dot');
  
   
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';
  
   
    if (h > 12) {
      h = h - 12;
    }
  
   
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
  
    
    hours.innerHTML = h + 'Hours';
    minutes.innerHTML = m + 'Minutes';
    secondes.innerHTML = s + 'Seconds';
    ampm.innerHTML = ap;
  
    
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  
   
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
  }, 1000);