const makeChange = (c) => {
  // your name here
	let p=0,n=0,d=0,q=0;
	if(c>=25)
	{
		c=c-25;
		q++;
	}
	else if(c<25)
	{
		c=c-10;
		d++;
	}
	else if(c<10)
	{
		c=c-5;
		n++;
	}
	if(c<5)
	{
		c=c-1;
		p++;
	}
	let ans={ "q": , "d": , "n": , "p":  };
	return ans;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
