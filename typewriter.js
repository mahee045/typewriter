const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  for (let i = 0; i < sentence.length; i++) {
    
    setTimeout(() => {
      process.stdout.write(sentence[i]); 
    }, 1000 + i * 50); // Initial delay + staggered delay
  }
  

  setTimeout(() => {
    process.stdout.write('\n'); // Print a newline character
  }, 1000 + sentence.length * 50); // Delay after the last character
}, 1000); // Initial delay before starting