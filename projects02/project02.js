const form = document.querySelector('form');

form.addEventListener('submit', function(n){
    n.preventDefault();
    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter your height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter your weight ${weight}`;
    }else {
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2) //to fixed shows only 2 decimal points
        result.innerHTML = `<span> ${bmi} </span>`;
        console.log(bmi);
    }
    // if (bmi <= 18.6){
    //     result.innerHTML = `Your BMI is too low ${bmi}`;
    // }else if(bmi >= 18.6 && bmi <= 24.9){
    //     result.innerHTML = `Your bmi is normal ${bmi}`;
    // }else(bmi >= 24.9){
    //     result.innerHTML = `Your BMI is too high ${bmi}`;
    // }
});