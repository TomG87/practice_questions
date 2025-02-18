// HackerRank Home
// |
// Prepare
// Certify
// Compete
// Apply
// Search

// |
// Switch to..

// PrepareAlgorithmsImplementationThe Hurdle Race
// The Hurdle Race
// 14 more points to get your next star!
// Rank: 1938649|Points: 86/100
// Problem Solving
// Problem
// Submissions
// Leaderboard
// Discussions
// Editorial
// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by  unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return .

// Example

// The character can jump  unit high initially and must take  doses of potion to be able to jump all of the hurdles.

// Function Description

// Complete the hurdleRace function in the editor below.

// hurdleRace has the following parameter(s):

// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle
// Returns

// int: the minimum number of doses required, always  or more
// Input Format

// The first line contains two space-separated integers  and , the number of hurdles and the maximum height the character can jump naturally.
// The second line contains  space-separated integers  where .

// Constraints

// Sample Input 0

// 5 4
// 1 6 3 5 2
// Sample Output 0

// 2
// Explanation 0

// Dan's character can jump a maximum of  units, but the tallest hurdle has a height of :

// image

// To be able to jump all the hurdles, Dan must drink  doses.

// Sample Input 1

// 5 7
// 2 5 4 5 2
// Sample Output 1

// 0
// Explanation 1

// Dan's character can jump a maximum of  units, which is enough to cross all the hurdles:

// image

// Because he can already jump all the hurdles, Dan needs to drink  doses.

// Language
// C++11
// More
// 1234567891011121314151617181920212223242526
//     tokens.push_back(str.substr(start));

//     return tokens;
// }

// Line: 95 Col: 1

// Test against custom input
// Authorma5termind
// DifficultyEasy
// Max Score15
// Submitted By313660
// Need Help?
// View discussions
// View editorial
// View top submissions
// rate this challenge

// MORE DETAILS
// Download problem statement
// Download sample test cases
// Suggest Edits
// Share on FacebookShare on TwitterShare on LinkedIn
// BlogScoringEnvironmentFAQAbout UsSupportCareersTerms Of ServicePrivacy Policy

function hurdle(number, array) {
  let max = array[0];

  for (let x = 0; x < array.length; x++) {
    if (array[x] > max) {
      max = array[x];
    }
  }
  if (number >= max) {
    return 0;
  } else {
    return max - number;
  }
}

console.log(hurdle(7, [1, 6, 3, 5, 2]));
