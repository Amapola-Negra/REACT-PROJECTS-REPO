import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React, {Component} from "react";
import './App.css'

const quotes=[
  {quote:"“Be yourself; everyone else is already taken.”",
   author:"Oscar Wilde"
  },
  {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
   author:"Albert Einstein"
  },
  {quote:"“So many books, so little time.”",
   author:"Frank Zappa"
  },
  {quote:"“A room without books is like a body without a soul.” ",
   author:"Marcus Tullius Cicero"
  },
  {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
   author:"Bernard M. Baruch"
  },
  {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ",
   author:"Dr. Seuss"
  },
  {quote:"“You only live once, but if you do it right, once is enough.” ",
   author:"Mae West"
  },
  {quote:"“Be the change that you wish to see in the world.” ",
   author:" Mahatma Gandhi"
  },
  {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
   author:"Robert Frost"
  },
  {quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ",
   author:"J.K. Rowling, Harry Potter and the Goblet of Fire "
  },
  {quote:"“If you tell the truth, you don't have to remember anything.”",
   author:"Mark Twain"
  },
  {quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
   author:"Maya Angelou"
  },
  {quote:"“A friend is someone who knows all about you and still loves you.”",
   author:"Elbert Hubbard"
  },
  {quote:"“Always forgive your enemies; nothing annoys them so much.”",
   author:"Oscar Wilde"
  },
  {quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
   author:"Oscar Wilde"
  },
  {quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
   author:"Mahatma Gandhi"
  },
  {quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
   author:"Oscar Wilde, The Happy Prince and Other Stories "
  },
  {quote:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
   author:" Ralph Waldo Emerson"
  },
  {quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
   author:" Andre Gide, Autumn Leaves "
  },
  {
    quote:"“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”",
    author:"Maurice Switzer, Mrs. Goose, Her Book "
  },
  {
    quote:"“Life is what happens to us while we are making other plans.”",
    author:"Allen Saunders"
  },
  {
    quote:"“I have not failed. I've just found 10,000 ways that won't work.”",
    author:"Thomas A. Edison"
  },
  {
    quote:"“A woman is like a tea bag; you never know how strong it is until it's in hot water.”",
    author:"Eleanor Roosevelt"
  },
  {
    quote:"“If you don't stand for something you will fall for anything.”",
    author:"Gordon A. Eadie"
  },
  {
    quote:"“Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.”",
    author:"Groucho Marx, The Essential Groucho: Writings For By And About Groucho Marx "
  },
  {
    quote:"“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”",
    author:"Albert Einstein"
  },
  {
    quote:"“If you can't explain it to a six year old, you don't understand it yourself.”",
    author:"Albert Einstein"
  },
  {
    quote:"“Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.”",
    author:" Garrison Keillor"
  }

];
const aleaNum =(maxNum)=> {
  return Math.floor(Math.random() * maxNum);
}

let myNum=aleaNum(quotes.length);
const getAleaBackground = ()=>{
const h = aleaNum(360);
const s = aleaNum(100);
const l = 55;
return `hsl(${h}deg, ${s}%, ${l}%)`;
}
//body.style.backgroundColor=getAleaBackground();
//body.style.backgroundColor=this.state.backgroundColor;
class MyQuotes extends React.Component{
  
  constructor(props){
    super(props);
    this.state ={
      quote:quotes[myNum]['quote'],
      author:quotes[myNum]['author'],
      color: getAleaBackground(),
      backgroundColor:getAleaBackground()
    };
    this.handleButton =this.handleButton.bind(this);
     
  }
  
  handleButton(){
   let aleatorio=aleaNum(quotes.length);
    //console.log(quotes[aleatorio]);
    this.setState((state) =>({
      quote:quotes[aleatorio]['quote'],
      author:quotes[aleatorio]['author'],
      color:getAleaBackground(),
      backgroundColor:getAleaBackground(),
    }))
  }
  
  render (){
    return (
        <div id="contenido" style={{backgroundColor:this.state.color}}>
        <div id="quote-box" style={{color:this.state.color, backgroundColor:"white"}} >
          <div id="text">{this.state.quote}</div>
          <div id="author">{this.state.author}</div>
          <button id="new-quote" style={{backgroundColor:this.state.color}}onClick={this.handleButton} >New quote</button>
          <div id="tweet-quote"><a href={"https://www.twitter.com/intent/tweet"}>Tweet Quote</a>
            
          </div>
        </div>
    </div>
    )
  }
  
}

function App() {
  return (
    <div>
      <h1> Random Quote Machine </h1> 
      <MyQuotes />
    </div>
    
  );
}

export default App
