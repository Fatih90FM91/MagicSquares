function generateSquare(n){

	magicSquare = Array(n).fill(0).map(x => Array(n).fill(0));
    console.log(magicSquare);

       var count1=9;
       var count2=4;
        
        for (let i = 0; i< n; i++) {
         
      
        for (let j = 0; j< n; j++) {
         
            magicSquare[i][j]=count1--;

            if (count1==4) {
                magicSquare[i][j]=count2++ +1; 
            }
          
            
        }
    }

    if((magicSquare[0][0] + magicSquare[1][1] + magicSquare[2][2])==15 && (magicSquare[0][2] + magicSquare[1][1] + magicSquare[2][0])==15 ){
        console.log("true");
        document.write("Magic Sqare is true:<br>");
    }


    document.write("Magic Sqare for " + n + ":<br>");
    document.write("Sum of each row or column " + parseInt(n*(n*n+1)/2) + ":<br>");
    
    for (let i = 0; i < n; i++) {
       
        for (let j = 0; j < n; j++) {
            document.write(magicSquare[i][j] + " ");
            
        }
        document.write("<br>")
    }



    console.log( magicSquare);
}

let n =3;
generateSquare(n);

