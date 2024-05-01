function findPeak(data){
  const numbers = JSON.parse(data);

if (numbers.length <= 1 ){
  return 0;

}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]> numbers[i-1] && numbers[i]> numbers[i+1]) {     //checking the neighbouring numbers are greater or not
      return numbers[i];
  }
}

if(numbers[0]> numbers[1]){             //checking if the initial array value  is greater or not
  return numbers[0];
 }else if (numbers[numbers.length - 1] > numbers[numbers.length -2]){                       //checking if the pervious value is greater than the next value      
  return numbers[numbers.length -1];
 }
 return 0;
}

const data = '[1,1,1,2,1,1,1]';
const peak = findPeak(data);



console.log(`the peek value is  ${peak}`);