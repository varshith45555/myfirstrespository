function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

// Example usage:
console.log(truncateString("Hello, world!", 5));   // Output: Hello...
console.log(truncateString("JavaScript", 10));     // Output: JavaScript
console.log(truncateString("Short", 10));          // Output: Short
