module.exports = function toReadable (number) {
  let numArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
   'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'];
  let numOfTen = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if ( number === 0 ) return 'zero';
  if ( number > 0 && number < 20 ) return numArr[number];
  if ( number >= 20 && number < 100 ) {
      if( number % 10 === 0){
        number = number.toString().split('');
        return numOfTen[number[0] - 1];
    }else{
        number = number.toString().split('');
        return `${numOfTen[number[0] - 1]} ${numArr[number[1]]}`;
    }  
    
  }
  if ( number >= 100 && number < 1000) {
    numberRest = number % 100;
    if (number % 100 === 0) {
        number = number.toString().split('');
        return `${numArr[number[0]]} hundred`;
    } else if ( numberRest < 20 ) {
        number = number.toString().split('');
        return `${numArr[number[0]]} hundred ${numArr[numberRest]}`;
    } else if ( numberRest % 10 === 0 && numberRest > 0) {
        number = number.toString().split('');
        return `${numArr[number[0]]} hundred ${numOfTen[number[1] - 1]}`;
    } else {
        number = number.toString().split('');
        return `${numArr[number[0]]} hundred ${numOfTen[number[1] - 1]} ${numArr[number[2]]}`;
    }

  }
};
