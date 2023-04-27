


//get values from the user. we need to get the fizz and the buzz value

function getValues(){

    // get the user values from the page
    let fizzValue = document.getElementById('fizzValue').value
    let buzzValue = document.getElementById('buzzValue').value

    // parse for numbers
    fizzValue = parseInt(fizzValue)
    buzzValue = parseInt(buzzValue)

    // check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        // call fizzBuzz
        let fbArray = fizzbuzz(fizzValue, buzzValue)

        displayData(fbArray)

    } else {

        alert('You must enter an integer')
    }

    // we call the fizzbuzz function

    // call the display function and write the values to the screen

}

function fizzbuzz(fizzValue, buzzValue){

    // init the returnArray
    let returnArray = []

    // loop from 1 to 100
    for( i = 1; i <= 100; i++ ) {


        // we need to check the current in three steps
        // check to see if divisible by both 3 and 5
        // if so push 'FizzBuzz into an array and not the number

        // check to see if divisible by fizz value (3)
        // if so push 'fizz' into an array and not the number

        // check to see if divisible by buzz value (5)
        // if so push 'buzz' into an array and not the number

        // if none, then push the number into the array

        if( ( i % fizzValue === 0 ) && ( i % buzzValue === 0 ) ){
            returnArray.push('FizzBuzz')
        } else if ( i % fizzValue === 0 ){
            returnArray.push('Fizz')
        } else if ( i % buzzValue === 0 ){
            returnArray.push('Buzz')
        } else {
            returnArray.push(i)
        }

        return returnArray
        
    }

    

    

}


// loop over the array and create a tablerow for each item
function displayData(fbArray){

    // get the table body element from the page
    let tableBody = document.getElementById('results')

    // get the template row
    let templateRow = document.getElementById('fbTemplate')

    // clear table first
    tableBody.innerHTML = ''

    for( i = 0; i < fbArray.length; i++ ){
        let tableRow = document.importNode(templateRow.contentEditable, true)
    }

    // add all the rows to the table
    let 

}