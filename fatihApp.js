function generateSquare(n){

	magicSquare = Array(n).fill(0).map(x => Array(n).fill(0));
    console.log(magicSquare);


	// Initialize position for 1
	var i = parseInt(n / 2);
    console.log(i);
	var j = n - 1;
    console.log(j);

	// One by one put all values in magic square
	for (num = 1; num <= n * n;) {
		if (i == -1 && j == n) // 3rd condition
		{
			j = n - 2;
			i = 0;
		}
		else {
			// 1st condition helper if next number
			// goes to out of square's right side
			if (j == n)
				j = 0;

			// 1st condition helper if next number is
			// goes to out of square's upper side
			if (i < 0)
				i = n - 1;
		}

		// 2nd condition
		if (magicSquare[i][j] != 0) {
			j -= 2;
			i++;
			continue;
		}
		else
			// set number
			magicSquare[i][j] = num++;

		// 1st condition
		j++;
		i--;
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

}

let n =3;
generateSquare(n);



