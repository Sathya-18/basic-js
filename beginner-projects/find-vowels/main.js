let text = document.getElementById('txt');
let result = document.getElementById('res');
let btn = document.getElementById('clk');

const findVowels = (inpt)=>{
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let char of inpt.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
        console.log(char);
        
       
    }
    return count;
}

btn.addEventListener('click',()=>{
    console.log(typeof text.value);
    result.innerHTML = findVowels(text.value);
})



