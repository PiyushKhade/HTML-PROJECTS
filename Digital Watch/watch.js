 const currentTimeElem= document.getElementById('clock');

        const currentTime=(e)=>{
            let currTime= new Date().toLocaleTimeString();
            currentTimeElem.innerText=currTime;
        };
        
        currentTime();

        const intervalId = setInterval(() => {
            currentTime();
        }, 1000);

    // In case : If we need to stop the timer after some time then,

    // setTimeout(() => {
    //     clearInterval(intervalId)
    // }, 5000);