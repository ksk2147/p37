class Question{
    constructor(){
        this.title = createElement("h1");
        this.question = createElement("h2");
        this.option1 = createElement("h3");
        this.option2 = createElement("h3");
        this.input1 = createInput("Enter your name here");
        this.input2 = createInput("Enter your answer here");
        this.button = createButton("Submit");
    }

    display(){
        this.title.html("Welcome to my quiz. Remember to try your best!")
        this.title.position(100, 0);
        this.question.html("I start with M, end with X and have a never ending amount of letters. What am I?")
        this.question.position(20, 80);
        this.option1.html("A) Mix");
        this.option1.position(150, 150);
        this.option2.html("B) Mailbox");
        this.option2.position(150, 200);
        this.input1.position(150, 300);
        this.input2.position(350, 300);
        this.button.position(320, 350);

        this.button.mousePressed(()=>{
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.input1.hide();
        this.input2.hide();

        contestant.name = this.input1.value()
        contestant.count +=1;
        answer.name = this.input2.value()
        contestant.index = contestantCount();
        contestant.updateCount(contestantCount);
        })
    }
}








// In Question.js file:
// Create all the input, heading elements you need to create your Quiz game UI inside the constructor.
// Write a hide( ) to hide the elements
// Create display( ) function and inside it assign the position, text, heading names to all the HTML elements you create in the constructor.