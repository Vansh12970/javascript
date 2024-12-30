// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3            //u can pass string or numeric values in place of value in switch

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:                
        console.log("march");
        break;                   // if i remove break; then all case after result value 
    case 4:                // print except default case
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}