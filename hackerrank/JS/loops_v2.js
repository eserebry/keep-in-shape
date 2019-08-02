#!/usr/bin/env node

   /*
Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
   */

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
    var vowels = 'aeiou';
    var result = '';
    for (let i = 0; i < s.length; i++) { 
	if (vowels.includes(s[i])) {
	    console.log(s[i]);
	    }
	else { 
	   if (i == s.length - 1) {
	       result += s[i];
		}
	   else { 
	       result += s[i] + '\n';
	   }
	}
    }
    console.log(result)
	}

function main() {
    const readline = require('readline').createInterface({
	    input: process.stdin,
	    output: process.stdout
})
    
	readline.question('Please, enter your line here: ', (line) => {
	    vowelsAndConsonants(line)
	    readline.close()
	})
}

main()