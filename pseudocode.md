# **MIND READER**
### INIT CLASS:
> - **CREATE** class Page


### **CREATE** Class Attributes
> - CurrentPage = false
> - PageIndex : INT
> - HelperText: STR
> - ButtonDisplayed: BOOL
> - ButtonText: STR
> - HeaderText: STR
> - ExampleText: STR
> - GoButtom: BOOL
> - ResetButton: BOOL

### **CREATE** Global Vars
> - symbols = []
> - random = [] 

### **CREATE** Objects
> - Page0 
>   - *CurrentPage* = true
>   - *PageIndex* : 0
>   - *HelperText* : ""
>   - *ButtonDisplayed* : false
>   - *ButtonText* : ""
>   - *HeaderText* : "I can read your mind"
>   - *ExampleText* : ""
>   - GoButtom : true
>   - ResetButton : false
#### Click GoButtom
> - Page1
>   - CurrentPage = false
>   - *PageIndex* : 1
>   - *HelperText* : "When you have your number click next"
>   - *ButtonDisplayed* : true
>   - *ButtonText* : "NEXT"
>   - *HeaderText* : "Pick a number from 01-99"
>   - *ExampleText* : ""
>   - GoButtom : false
>   - ResetButton : true
#### Click ButtonDisplayed
> - Page2
>   - *CurrentPage* = false
>   - *PageIndex* : 2
>   - *HelperText* : "click to proceed"
>   - *ButtonDisplayed* : true
>   - *ButtonText* : "NEXT"
>   - *HeaderText* : "Add both digits together to get a new number"
>   - *ExampleText* : "Ex. 14 is 1 + 4 = 5"
>   - GoButtom : false
>   - ResetButton : true
#### Click ButtonDisplayed
> - Page3
>   - *CurrentPage* = false
>   - *PageIndex* : 3
>   - *HelperText* : "click to proceed"
>   - *ButtonDisplayed* : true
>   - *ButtonText* : "NEXT"
>   - *HeaderText* : "Subtract your new number from the original number"
>   - *ExampleText* : "Ex. 14 - 5 = 9"
>   - GoButtom : false
>   - ResetButton : true
#### Click ButtonDisplayed
> - Page4
>   - *CurrentPage* = false
>   - *PageIndex* : 4
>   - *HelperText* : "Note the symbol beside the number"
>   - *ButtonDisplayed* : true
>   - *ButtonText* : "REVEAL"
>   - *HeaderText* : "0-&"
>   - *ExampleText* : "Find your number"
>   - GoButtom : false
>   - ResetButton : true
#### click ButtonDisplayed
> - Page5
>   - *CurrentPage* = false
>   - *PageIndex* : 5
>   - *HelperText* : "&"
>   - *ButtonDisplayed* : false
>   - *ButtonText* : ""
>   - *HeaderText* : "&"
>   - *ExampleText* : "Your symbol is"
>   - GoButtom : false
>   - ResetButton : true


```
FUNCTION init
Create HTML Elemets
    h1 
    2 btn
    2 p tags

FUNCTION Update
    BOOLS
    Current Page
    GoButton 
    ResetButton

    HTML ELEMTNS
    Update h1 with HelperText
    Update btn1 with Go Btn or reset btn
    update btn2 with btn text
    update p1 with Helpertext
    update p2 with with ExampleText
```