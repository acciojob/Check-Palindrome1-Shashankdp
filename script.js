// complete the given function

function palindrome(str){

	let start=0;
	let end=str.length()-1;

	while(start<=end){
		if(str.charAt(start)!=str.charAt(end)){
			Console.log("false");
			return;
		}
		start++;
		end--;
	}
    console.log("true");
}
module.exports = palindrome
