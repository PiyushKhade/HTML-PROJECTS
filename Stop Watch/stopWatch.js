 const countDownElem=document.getElementById('countDown');
        const resetValueElem= document.querySelector('.resetValue');
        let counter=0;
        let intervalId;

        // To start Timer

        const startTimer=()=>{
            intervalId=setInterval(() => {
                countDownElem.innerText=counter++;
            }, 1000);
        }

        // To Stop Timer

        const stopTimer=()=>{
            clearInterval(intervalId)
            showStopValue();
        }

        // To Reset Timer

        const resetTimer=()=>{
            counter=0;
            countDownElem.innerText=counter;
            clearInterval(intervalId);
        }

        // to show stopped value

        const showStopValue=()=>{
            const paragraph=document.createElement('p');
            paragraph.innerText=`record stopped at ${counter-1}s`;
            resetValueElem.append(paragraph);
        };

        // clear time and value

        const clearTimer=()=>{
            resetValueElem.innerHTML="";
            clearInterval(intervalId);
            resetTimer();
        };



        document.querySelector('.start_btn').addEventListener('click',startTimer);
        document.querySelector('.reset_btn').addEventListener('click',resetTimer);
        document.querySelector('.stop_btn').addEventListener('click',stopTimer);
        document.querySelector('.time_btn').addEventListener('click',showStopValue);
        document.querySelector('.clear_btn').addEventListener('click',clearTimer);