const inputField1=document.getElementById('inputfield1');
        const inputField2=document.getElementById('inputfield2');
        const dis=document.getElementById('disc');
        let activeInputField = inputField1;
        const keys = document.querySelectorAll('.key');
        const resebtn=document.getElementById('rest')
        keys.forEach(key=>
        {
            key.onclick=function()
            {
                const value=key.getAttribute('data-value');
                activeInputField.value+=value;
            }
        }
        );
        const clr1=document.getElementById('C1');
        const clr2=document.getElementById('C2');
        clr1.onclick=function()
        {
            inputField1.value=inputField1.value.slice(0, -1);
            inputField2.value = inputField2.value.slice(0, -1);
        }
        clr2.onclick=function()
        {
            inputField1.value=inputField1.value.slice(0, -1);
            inputField2.value = inputField2.value.slice(0, -1);
        }
        const submit1=document.getElementById('subm1');
        const submit2=document.getElementById('subm2');
        submit1.onclick=function()
        {
            const limit=document.getElementById('inputfield1').value;
            inputField1.style.display='none';
            inputField2.style.display='block';
            submit1.style.display='none';
            submit2.style.display='block'
            activeInputField = inputField2;
            inputField2.focus();
        };
        let score=0;
        submit2.onclick = function() {
        const limit=parseFloat(document.getElementById('inputfield1').value)
        const disp1 = document.getElementById('disc');
        const disp2=document.getElementById('disc2');
        const disp3=document.getElementById('disc3')
        const enno = parseFloat(document.getElementById('inputfield2').value);
        const resetbtn=document.getElementById('rest');
        const savebtn=document.getElementById('sve');
        const scores=document.getElementById('scrx');
        const gnnum = Math.floor(Math.random() * limit)+1 ;
        disp1.innerText = `${enno}`;
        disp2.innerText=`${gnnum}`;
        resetbtn.style.display='block';
        savebtn.style.display='block';
        if(gnnum === enno)
        {
            score=score+1;
            disp1.style.backgroundColor=' lightgreen';
            disp3.innerText='=';
        }
        else{disp3.innerText='';}
        scores.innerText=score;
        };
        window.onload=function()
        {
            const scorerel=localStorage.getItem('score');
            if(scorerel)
        {
            score = Number(scorerel);
            document.getElementById('scrx').innerText=score;
        }
        }
        const resetbtn=document.getElementById('rest');
        resetbtn.onclick=function()
        {
        const disp1 = document.getElementById('disc');
        const disp2=document.getElementById('disc2');
        const disp3=document.getElementById('disc3');
        const scores=document.getElementById('scrx');
        disp1.innerText='0';
        disp2.innerText='0';
        disp3.innerText=' ';
        scores.innerText='0';
        inputField1.style.display='block';
        inputField2.style.display='none';
        inputField1.value=' ';
        inputField2.value=' ';
        submit1.style.display='block';
        submit2.style.display='none';
        activeInputField=inputField1;
        score = 0;
        localStorage.setItem('score', score);
        }
        window.addEventListener('beforeunload', () => {
        console.log('Do you want to save changes');
         });
         const savebtn=document.getElementById('sve');
         savebtn.onclick=function(){
            localStorage.setItem('score',score);
         }