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
    var i, j, k;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result;
    var s_arr = s.split(""); 
	for (i = 0; i < s_arr.length; i++) { 
	    for (j = 0; j < vowels.length; j++) { 
		if (s_arr[i] == vowels[j]) {
		    console.log(s_arr[i]);
		    delete s_arr[i];
		}            
	    }
	}
	result = s_arr.join("");
    for (k = 0; k < result.length; k++) { 
	console.log(result[k]);
    }
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