var quill = new Quill('#editor', {
	theme: 'snow',
  placeholder: 'Testing typing',
  debug: true
});

quill.on('selection-change', function(range, oldRange, source) {
  if (range) {
    if (range.length == 0) {
      console.log('User cursor is on', range.index);

      if(range.index === 5){
          console.log("More than 5");
          
          var btn = document.createElement("BUTTON");
          var t = document.createTextNode("CLICK ME");

          btn.appendChild(t);
          document.body.appendChild(btn);

          // alert("Hai");
      }

    } else {
      var text = quill.getText(range.index, range.length);
      console.log('User has highlighted', text);
    }

  } else {
    
    console.log('Cursor not in the editor');
  }
});

//***************************************

// Using Js

// Implement and register module
// Quill.register('modules/counter', function(quill, options) {

//   var container = document.querySelector(options.container);
//   quill.on('text-change', function() {
//     var text = quill.getText();

//  	if (options.unit === 'word') {
//       container.innerText = text.split(/\s+/).length + ' words';
//     } else {
//       container.innerText = text.length + ' characters';
//     }
//     // container.innerText = text.split(/\s+/).length;
//   });
// });

// // We can now initialize Quill with something like this:
// var quill = new Quill('#editor', {
//   modules: {
//     counter: {
//     	container: '#counter',
//     	unit: 'word'
//     }
//   }
// });


//# Using Js ES6
// class Counter {
//   constructor(quill, options) {
//     this.quill = quill;
//     this.options = options;
//     this.container = document.querySelector(options.container);
//     quill.on('text-change', this.update.bind(this));
//     this.update();  // Account for initial contents
//   }

//   calculate() {
//     let text = this.quill.getText();
//     if (this.options.unit === 'word') {
//       text = text.trim();
//       // Splitting empty text returns a non-empty array
//       return text.length > 0 ? text.split(/\s+/).length : 0;
//     } else {
//       return text.length;
//     }
//   }
  
//   update() {
//     var length = this.calculate();
//     var label = this.options.unit;
//     if (length !== 1) {
//       label += 's';
//     }
//     this.container.innerText = length + ' ' + label;
//   }
// }

// Quill.register('modules/counter', Counter);

// var quill = new Quill('#editor', {
//   modules: {
//     counter: {
//       container: '#counter',
//       unit: 'word'
//     }
//   }
// });


// //#Recognize new line in Quill.js
// var boldButton = document.querySelector('.ql-bold');

// boldButton.addEventListener('click', function(){
// 	var sel = quill.getSelection();
// 	var text = quill.getText(sel.index, sel.length);

// 	if(sel){
// 		var arrayLinesLength = text.split("\n").map(function(line){
// 			return line.length
// 		});

// 		var startPosition = sel.index;

// 		for(var idx = 0; idx < arrayLinesLength.length; idx++){

//             var currentLineLength = arrayLinesLength[idx];

//             // ONLY MARK LINES WITH SOME CONTENT
//             if(currentLineLength > 0){

//               quill.insertText(startPosition, "----------");
//               quill.insertText(startPosition + currentLineLength + 10, "----------");

//               // PREPARE NEW STARTPOSITION
//               startPosition += currentLineLength + 2;
//             }
//             // COUNT THE NEWLINE SYMBOL
//             startPosition++; 
//           }
// 	}
// })