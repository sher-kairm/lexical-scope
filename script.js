// lexical scope
/**
 * The childern scope have access to the varibles defined in the parent scope
 * childern are lexically bound to the execution context of their parent
 */

 function people(){
     var num = 100;
     let literate = 50;
     const illerate = 50;

     function British(){

         console.log(`NUmber of peoples are: ${num}`)
         console.log(`Number of literate peoples are ${illerate}`)
         console.log(`Number of illitrate peoples are ${illerate}`)
     }
     British();
     
    }
 