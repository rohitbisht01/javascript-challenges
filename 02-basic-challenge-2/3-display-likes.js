// Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

/* 
    The function should return a string formatted as follows:

    If no one likes it, it should return 'no one likes this'
    If one person likes it, it should return '{name} likes this'
    If two people like it, it should return '{name1} and {name2} like this'
    If three people like it, it should return '{name1}, {name2} and {name3} like this'
    If more than three people like it, it should return '{name1}, {name2} and {x} others like this'
*/

function displayLikes(names) {
  let n = names.length;

  if (n === 0) return "no one likes this";
  else if (n === 1) return `${names[0]} likes this`;
  else if (n === 2) return `${names[0]} and ${names[1]} likes this`;
  else if (n === 4)
    return `${names[0]} and ${names[1]} and ${names[2]} likes this`;
  else return `${names[0]}, ${names[1]} and ${n - 2} likes this`;
}

console.log(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"]));
