let btn1 = document.getElementById('myBtn1');
        let btn2 = document.getElementById('myBtn2');
        let copyDiv = document.querySelector('.copyCode');
        let rgb1 = '#fff';
        let rgb2 = '#000';

        let myHexCode = () => {
            let myHexValue = '0123456789abcdef';
            let colorCode = "#";
            for (let i = 0; i < 6; i++) {
                colorCode = colorCode + myHexValue[Math.floor(Math.random() * 16)];
            }
            return colorCode;
        }

        const handleBtn1 = () => {
            rgb1 = myHexCode();
            console.log(rgb1);
            document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2})`;
            copyDiv.innerHTML = `Backgound-image: linear-gradient(to right ,${rgb1}, ${rgb2})`;
            btn1.innerText = rgb1;
            btn1.style.backgroundColor = rgb1;
        }

        const handleBtn2 = () => {
            rgb2 = myHexCode();
            console.log(rgb2);
            document.body.style.backgroundImage = `linear-gradient(to right , ${rgb2}, ${rgb1})`;
            copyDiv.innerHTML = `backgound-image: linear-gradient(to right ,${rgb1}, ${rgb2})`;
            btn2.innerText = rgb2;
            btn2.style.backgroundColor = rgb2;
        }

        const handleCopy = () => {
            let copiedText = navigator.clipboard.writeText(copyDiv.textContent);
            alert('color copied to clipboard')
        }

        btn1.addEventListener('click', handleBtn1);
        btn2.addEventListener('click', handleBtn2);
        copyDiv.addEventListener('click', handleCopy);