const headerText = document.getElementById('headerText');
const btnPlay = document.getElementById('btnPlay');
const btnStart = document.getElementById('btnStart');
const exampleText = document.getElementById('exampleText');
const helperText = document.getElementById('helperText');
const btnText = document.getElementById('btnText');

const symbols = ['!','@','#','$','%','^','&','*','B'];


class Page {
        constructor(
                        currentPage, 
                        pageIndex,
                        helperText,
                        buttonDisplayed,
                        buttonText,
                        headerText,
                        exampleText,
                        goButton,
                        resetButton
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
