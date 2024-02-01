 const response = {
    status: 200,
     data: {
        message: 'Success'
     }

 }


 const responseError = {
     status: 500,
     data: {
         message: 'Failed'
     }

 }

 if(responseError.status === 200) {
    console.log(`Response message equals ${response.data.message === 'Success'}`)
} else {
     console.log(`Response message equals ${response.data.message === 'Failed'}`)
 }


 let num = 30;
 let num1 = 8;
 let num2 = 80;
 if(num1 === 8 || num2 === 80 || num === 180) {
     console.log('First')
 } else if(num === 11) {
     console.log('Second')
 } else if(num === 15) {
     console.log('Third')
 } else if(num === 10) {
     console.log('Forth')
 } else {
     console.log('No one')
 }

 switch (num) {
     case 10:
         console.log('First');
         break;
     case 20:
         console.log('Second');
         break;
     case 15:
         console.log('Third');
         break;
     case 17:
         console.log('Forth');
         break;
     default:
         console.log(' No one!!!')
 }

 if(num === 10) {
     console.log('Ten')
 } else {
     console.log('Not ten')
 }

 num === 10 ? console.log('Ten') : console.log('Not ten');

 num === 10 ? console.log('Ten') : num === 20 ? console.log('Twenty') : num === 30 ? console.log('Thirty') : console.log('No!!!!!!')