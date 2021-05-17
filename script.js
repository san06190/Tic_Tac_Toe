var turn=1;
var play= true;
$('table tr td').click(function() {
  if ($(this).text()=="" && play)
    if(turn%2==1)
    {
      $(this).append("X");
      $(this).css('color','#c70039');
    }
    else
    {
      $(this).append("O");
      $(this).css('color','#c0e218');
    }
    turn++;
   if(win()!=-1 && win()!="")
   	if(win()=='X')
   	{
     //alert("X won");
     $('body').append('<center><div class=winner><span>Winner : X</span></div></center>');
     $('.winner').css('color','#c70039');
     $('#btn').css('background-color','#c70039').css('color','#d4e2d4');
   	} 
  	 else
   	{
     //alert("O won");
     $('body').append('<center><div class=winner><span>Winner : O</span></div></center>');
     $('.winner').css('color','#c0e218');
     $('#btn').css('background-color','#c0e218').css('color','#d4e2d4');
   	}
});
function win() {
	var a1=$('tr:nth-child(1) td:nth-child(1)').text();
	var a2=$('tr:nth-child(1) td:nth-child(2)').text();
	var a3=$('tr:nth-child(1) td:nth-child(3)').text();
	var b1=$('tr:nth-child(2) td:nth-child(1)').text();
	var b2=$('tr:nth-child(2) td:nth-child(2)').text();
	var b3=$('tr:nth-child(2) td:nth-child(3)').text();
	var c1=$('tr:nth-child(3) td:nth-child(1)').text();
	var c2=$('tr:nth-child(3) td:nth-child(2)').text();
	var c3=$('tr:nth-child(3) td:nth-child(3)').text();
    //checking rows
	if( a1==a2 && a2==a3)
		return a3;
	else if( b1==b2 && b2==b3)
		return b3;
	else if( c1==c2 && c2==c3)
		return c3;
	//checking columns
	else if( a1==b1 && b1==c1)
		return c1;
	else if( a2==b2 && b2==c2)
		return c2;
	else if( a3==b3 && b3==c3)
		return c3;
	//checking diagonals
	else if( a1==b2 && b2==c3)
		return c3;
	else if( a3==b2 && b2==c1)
		return c1;
	//no winner
	else return -1;	
}
