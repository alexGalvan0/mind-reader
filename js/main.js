class Page {
    constructor(
                currentPage = true, 
                pageIndex = 0 ,
                helperText = "",
                buttonDisplayed = 'hidden',
                buttonText = "",
                headerText = "I can Read your mind",
                exampleText = "",
                goButton = "block",
                resetButton = "hidden"
                )
    {
    this.currentPage = currentPage,
    this.pageIndex = pageIndex,
    this.helperText = helperText,
    this.buttonDisplayed = buttonDisplayed,
    this.buttonText = buttonText,
    this.headerText = headerText,
    this.exampleText = exampleText,
    this.goButton = goButton,
    this.resetButton = resetButton
    }
}

let page0 = new Page()
let page1 = new Page(
                    false, //currentPage
                    1,//pageIndex
                    "When you have your number click next",// helperText
                    "block", //buttonDisplayed
                    "NEXT", //ButtonText
                    "Pick a number from 01-99", //HeaderText
                    "", //ExampleText
                    'hidden', //GoButton
                    'block', // ResetButton
                        );

let page2 = new Page(
                    false, //currentPage
                    2,//pageIndex
                    "click to proceed",// helperText
                    "block", //buttonDisplayed
                    "NEXT", //ButtonText
                    "Add both digits together to get a new number", //HeaderText
                    "Ex. 14 is 1 + 4 = 5", //ExampleText
                    'hidden', //GoButton
                    'block', // ResetButton
                    );
let page3 = new Page(
                    false, //currentPage
                    3,//pageIndex
                    "click to proceed",// helperText
                    "block", //buttonDisplayed
                    "NEXT", //ButtonText
                    "Subtract your new number from the original number", //HeaderText
                    "Ex. 14 - 5 = 9", //ExampleText
                    'hidden', //GoButton
                    'block', // ResetButton
                    );

let page4 = new Page(
                    false, //currentPage
                    4,//pageIndex
                    "Note the symbol beside the number",// helperText
                    "block", //buttonDisplayed
                    "REVEAL", //ButtonText
                    "0-&", //HeaderText
                    "Find your number", //ExampleText
                    'hidden', //GoButton
                    'block', // ResetButton
                    );
let page5 = new Page(
                    false, //currentPage
                    5,//pageIndex
                    "",// helperText
                    "hidden", //buttonDisplayed
                    "", //ButtonText
                    "&", //HeaderText
                    "Your symbol is", //ExampleText
                    'hidden', //GoButton
                    'block', // ResetButton
                    );

const pages = [
                page0,
                page1,
                page2,
                page3,
                page4,
                page5
            ];

//HTML ELEMENTS
const headerText = document.getElementById('headerText');
const btnPlay = document.getElementById('btnPlay');
const btnReset = document.getElementById('btnReset');
const exampleText = document.getElementById('exampleText');
const helperText = document.getElementById('helperText');
const btnText = document.getElementById('btnText');
const btns = document.querySelectorAll('.btn')
const navBtns = document.querySelectorAll('.navBtn');

// create list of symbols
const symbols = ['!','@','#','$','%','^','&','*','B','A','C','Z']
//shuffle symbols list

const shuffled = symbols.sort((a,b) => 0.5 - Math.random())
let all = [];
for (let l=0; l<=symbols.length; l++){
    all.push(symbols)
}
//nums
let nums = []
let shuffledIndex = 0;
for (let i=0; i<=99; i++){
    if(i%9 == 0){
        nums.push(i + ' - ' + shuffled[0] + '<br>')

    } else {
       nums.push(i + ' - ' + shuffled[shuffledIndex] + '<br>')

        if (shuffledIndex > 9){
            shuffledIndex = 0;
        }
    }

        shuffledIndex ++
}


for (navBtn of navBtns){navBtn.addEventListener('click', updatePage)}
btnReset.addEventListener('click', updatePage)
        


let index = 0;
function updatePage(e){

    page4.headerText = nums.toString().replaceAll(',','')
    let answer = String(nums[9])
    let answerSymbol = answer[4]
    page5.headerText = answerSymbol;
    page5.exampleText = "Your symbol is " + answerSymbol;

   if(e.target.id == 'btnPlay' || e.target.id == 'btnText'){
        index ++ 
        localStorage.setItem('page', index)

   } else {
        index = 0;
        localStorage.setItem('page',0)
   }
    headerText.innerHTML = pages[index].headerText;
    helperText.textContent = pages[index].helperText;

    //large next button
    for (navBtn of navBtns){navBtn.classList.remove('hidden','block')}
    btnText.classList.add(pages[index].buttonDisplayed);

    btnText.innerHTML = pages[index].buttonText;
    exampleText.textContent = pages[index].exampleText;

    for(btn of btns){btn.classList.remove('hidden', 'block')}
    btnPlay.classList.add(pages[index].goButton);
    btnReset.classList.add(pages[index].resetButton)
};


