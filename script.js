const extendHex = (shortHex) => {
  // Remove '#' symbol if present
  shortHex = shortHex.replace('#', '');

  // Check if the length is 3 (short hex code)
  if (shortHex.length === 3) {
    // Extend the short hex code to full hex code
    const fullHex = shortHex
      .split('')
      .map(char => char + char) // Duplicate each character
      .join('');
    
    return `#${fullHex.toUpperCase()}`; // Convert to uppercase and add '#'
  }

  return `Invalid input: ${shortHex}`; // Return an error message for invalid input length
};

// Do not change the code below. 
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
