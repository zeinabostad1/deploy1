(this.webpackJsonpmytest=this.webpackJsonpmytest||[]).push([[0],{21:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),o=(n(26),n(16)),s=n(17),i=n(20),m=n(19),u=(n(27),function(e){return r.a.createElement("h1",null,e.question)}),h=(n(28),function(e){var t=Object.keys(e.answer).map((function(t,n){return r.a.createElement("li",{className:e.correctAnswer===t?"correct":e.clickAnswer===t?"incorrect":"",onClick:function(){return e.CheckAnswer(t)},key:t},e.answer[t])}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{disabled:!!e.clickAnswer,className:"Answers"},t),r.a.createElement("div",null,e.correctAnswer?"Correct Answer":e.clickAnswer?"Incorect Answer":""))}),E=(n(29),n(1)),w=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={questions:{1:" Which of the following is more accurate for the following declaration? x = Circle()",2:" How to create a frame in Python?",3:" Pylab is a package that combine _______,________&______ into a single namespace.",4:" We can create an image in canvas. Select the option to do so?",5:"What is output for following code => y = [4, 5,1j] y.sort()"},answers:{1:{1:"x contains a reference to a Circle object",2:"x actually contains an object of type Circle",3:"Now you can assign int value to x"},2:{1:"Frame = frame.new()",2:"Frame = Frame()",3:"Frame = new.window()"},3:{1:" Numpy, scipy & pandas",2:"Numpy, pandas & matplotlib",3:"Numpy, scipy & matplotlib"},4:{1:" Canvas.create_image(filename)",2:" Image = Photoimage(file=imagefilename)",3:" Image = PhotoImage(imagefilename)"},5:{1:" Type Error",2:" [1j,4,5]",3:" [5,4,1j]"}},correctAnswers:{1:"1",2:"2",3:"3",4:"2",5:"1"},correctAnswer:0,clickAnswer:0,step:1,score:0},e.CheckAnswer=function(t){var n=e.state,a=n.correctAnswers,r=(n.correctAnswer,n.clickAnswer,n.step),c=n.score;t===a[r]?e.setState({score:c+1,correctAnswer:a[r],clickAnswer:t}):e.setState({correctAnswer:0,clickAnswer:t})},e.nextStep=function(t){e.setState({step:t+1,correctAnswer:0,clickAnswer:0})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.questions,a=t.answers,c=t.correctAnswer,l=t.clickAnswer,o=t.step,s=t.score;return r.a.createElement("div",{className:"Content"},o<=Object.keys(n).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{question:n[o]}),r.a.createElement(h,{answer:a[o],step:o,CheckAnswer:this.CheckAnswer,correctAnswer:c,clickAnswer:l}),r.a.createElement("button",{className:"NextStep",disabled:!(l&&Object.keys(n).length>=o),onClick:function(){return e.nextStep(o)}},"Next")):r.a.createElement("div",{className:"finalpage"},r.a.createElement("h1",null,"you have complete the quiz"),r.a.createElement("p",null," your score is: ",s," of ",Object.keys(n).length),r.a.createElement("p",null,"Thank you!")),r.a.createElement(E.b,{to:"/"},"Main Page"))}}]),n}(a.Component);n(9);var p=function(){return r.a.createElement("div",null,r.a.createElement(E.b,{to:"/"},"Main Page"),r.a.createElement("h1",null,"About"))};var f=function(){return r.a.createElement("div",null,r.a.createElement(E.b,{to:"/"},"Main Page"),r.a.createElement("h1",null,"Contact"))},b=n(2);var A=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"welcome to Test Center"),r.a.createElement("h1",null),r.a.createElement(E.b,{to:"/"},"Main Page"),r.a.createElement("h1",null),r.a.createElement(E.b,{to:"/users"},"Show List of Users"),r.a.createElement("h1",null),r.a.createElement(E.b,{to:"/contact"},"Contact Me:"),r.a.createElement("h1",null),r.a.createElement(E.b,{to:"/about"},"About Me:"),r.a.createElement("h1",null),r.a.createElement(E.b,{to:"/test"},"test"))},g=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"404 Not Found!"))},d=function(){return r.a.createElement("div",null,r.a.createElement(E.b,{to:"/"},"Main Page"),r.a.createElement("ul",null,["Alex, Eric, Sarah, Zeinab, Farjam"].map((function(e,t){return r.a.createElement("li",{key:t},e)}))))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:A}),r.a.createElement(b.b,{exact:!0,path:"/404",component:g}),r.a.createElement(b.b,{exact:!0,path:"/users",component:d}),r.a.createElement(b.b,{exact:!0,path:"/contact",component:f}),r.a.createElement(b.b,{exact:!0,path:"/about",component:p}),r.a.createElement(b.b,{exact:!0,path:"/test",component:w}),r.a.createElement(b.a,{to:"/404"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.77d5477f.chunk.js.map