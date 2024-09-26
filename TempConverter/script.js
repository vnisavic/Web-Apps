const celsInput = document.getElementById('celsius')
const fahrInput = document.getElementById('fahr')
const kelvInput = document.getElementById('kelvin')


function getTemp(event){

   const currentValue= +event.target.value   //trenutna vrednost u inputu je ona koja je unesena na event a + pretvara u broj//

   switch (event.target.name) {                 //ako je ime vezano za event celsius onda radi sledecu konverziju

    case 'celsius':
        kelvInput.value=(currentValue+273.32)
        fahrInput.value=(currentValue*1.8+32)
        break;

        case 'fahrenheit':
            celsInput.value=((currentValue-32)/1,8)
            kelvInput.value=((currentValue-32)/1.8 +273.32)
            break;

            case 'kelvin':
                celsInput.value=(currentValue-273.32)
                fahrInput.value=((currentValue-273.32)*1.8 +32)
                break;
   
    default:
        break;
   }

}