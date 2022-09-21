const headerTexts = document.getElementById('headerText');
const btnPlay = document.getElementById('btnPlay');
const btnReset = document.getElementById('btnStart');
const exampleText = document.getElementById('exampleText');
const helperText = document.getElementById('helperText');
const btnText = document.getElementById('btnText');

const symbols = ['!','@','#','$','%','^','&','*','B'];

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
                        resetButton = false
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
        this .resetButton = resetButton
    }
    update(){
        return this.pageIndex ++
    };    
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
                        false, //GoButton
                        true, // ResetButton
                     );

let page2 = new Page(
                        false, //currentPage
                        2,//pageIndex
                        "click to proceed",// helperText
                        "block", //buttonDisplayed
                        "NEXT", //ButtonText
                        "Add both digits together to get a new number", //HeaderText
                        "Ex. 14 is 1 + 4 = 5", //ExampleText
                        false, //GoButton
                        true, // ResetButton
                    );
let page3 = new Page(
                        false, //currentPage
                        3,//pageIndex
                        "click to proceed",// helperText
                        "block", //buttonDisplayed
                        "NEXT", //ButtonText
                        "Subtract your new number from the original number", //HeaderText
                        "Ex. 14 - 5 = 9", //ExampleText
                        false, //GoButton
                        true, // ResetButton
                    );

let page4 = new Page(
                        false, //currentPage
                        4,//pageIndex
                        "Note the symbol beside the number",// helperText
                        "block", //buttonDisplayed
                        "REVEAL", //ButtonText
                        "0-&", //HeaderText
                        "Find your number", //ExampleText
                        false, //GoButton
                        true, // ResetButton
                    );
let page5 = new Page(
                        false, //currentPage
                        5,//pageIndex
                        "&",// helperText
                        "hidden", //buttonDisplayed
                        "", //ButtonText
                        "&", //HeaderText
                        "Your symbol is", //ExampleText
                        false, //GoButton
                        true, // ResetButton
                    );

const pages = [
                page0,
                page1,
                page2,
                page3,
                page4,
                page5
            ];



btnPlay.addEventListener('click', () => {
    pages[pageIndex].update()
    headerTexts.textContent = pages[pageIndex].headerText;
    helperText.textContent = pages[pageIndex].textContent;
    btnPlay.classList.add(pages[pageIndex].buttonDisplayed);
    btnText.textContent = pages[pageIndex].buttonText;
    exampleText.textContent = pages[pageIndex].exampleText;
    btnPlay.classList(pages[pageIndex].goButton);
    btnReset.classList(pages[pageIndex].resetButton);   
});

