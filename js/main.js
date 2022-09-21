const headerText = document.getElementById('headerText');
const btnPlay = document.getElementById('btnPlay');
const btnReset = document.getElementById('btnStart');
const exampleText = document.getElementById('exampleText');
const helperText = document.getElementById('helperText');
const btnText = document.getElementById('btnText');

const symbols = ['!','@','#','$','%','^','&','*','B'];


class Page {
        constructor(
                        currentPage = true, 
                        pageIndex = 1 ,
                        helperText = "",
                        buttonDisplayed = 'hidden',
                        buttonText = "",
                        headerText = "I can Read your mind",
                        exampleText = "",
                        goButton = true,
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
    pageCount(){
        return
    };    
}
let page1 = new Page;

headerText.textContent = page1.headerText;
helperText.textContent = page1.textContent;
btnPlay.classList.add(page1.buttonDisplayed);
btnText.textContent = page1.buttonText;
exampleText.textContent = page1.exampleText;
btnPlay.classList(page1.goButton);
btnReset.classList(page1.resetButton);


