$(document).ready(function(){
	var count=0, id=0, cls, input;
	tab="<table id='table1' border='3'>"
	for(var i=0;i<3;i++){
		tab=tab+" <tr> ";
		for(var j=0;j<3;j++){
			tab=tab+"<td> <table class='table2' border='2'>";
			for(var l=0;l<3;l++){
				tab=tab+"<tr>"
				for(var k=0;k<3;k++){
					tab=tab+"<td id='"+count++ +"' class='tr"+i+" itr"+l+" cl"+j+" icl"+k+"'>"+"</td> ";
					// +"tr="+i+" "+"itr="+l+" cl="+j+" icl="+k		
				}
			}		
			tab=tab+"</tr> </table> ";
		}
		tab=tab+"</td> </tr>";	
	}
	tab=tab+"</table>";
	console.log(tab);
	$("body").append("</table>"+tab);
	//var sudo=[], td, arr=[];
		// td=$(".table2 td");
		// 	console.log(td);
		//  	for(var i=0;i<td.length;i++){
		// 	arr[i]=$(td[i]).attr("id");
  //     }
	 // //sudo=random();
	// for(i=0;i<sudo.length;i++){
	// 	$("#"+arr[i]).html(sudo[i]);
	// }


	$(".table2 td").click(function(){
		
		var input=$("#"+id).text();
		if(input==""){
			$("#"+id).css("background-color","white")
		}
		else{
			var box, row, col, check_box,check_row,check_col;
			box=$("."+cls[0]+"."+cls[2]);
			row=$("."+cls[0]+"."+cls[1]);
			col=$("."+cls[2]+"."+cls[3]);
			check_box=check(input,box,id);
			check_row=check(input,row,id);
			check_col=check(input,col,id);
			if(check_box==false||check_row==false|| check_col==false)
			$("#"+id).css("background-color","red")
		}
		$(this).css("background-color","#ffa")
		$("button").removeAttr('disabled')
		id=$(this).attr("id");	
		cls=$(this).attr("class").split(' ');	
	})
	$("button").click(function(){
		var val;
		val=$(this).val();
		if(val!=0){
			$("#"+id).html(val);
		}
		else
			$("#"+id).html("");
	})	
	function check(input,check,id){
	var rt=1;
		for(i=0;i<check.length;i++){
			var val1=$(check[i]).attr("id");
			var	val2=$("#"+val1).text();
			if(val2!=""&&val1!=id){
				if(input==val2){
					rt=0
					break;
				}
			}	
		}
		if(rt==0)
			return false;
		else
			return true;
	}
	// function random(){
	// 	var num, id, sudo=[],check_box, check_row, check_col,count=0, cls, arr=[], td, box, col, row,loop=0;
	// 	// var numbers=['1','2','3','4','5','6','7','8','9'], op=[];
	// 	td=$(".table2 td");
	// 	console.log(td);
	// 	for(var i=0;i<td.length;i++){
	// 		arr[i]=$(td[i]).attr("id");
 //    }
	// 	while(count!=arr.length){
	// 		num = Math.floor(Math.random() * 9)+1;
	// 		 // id=Math.floor(Math.random() * 81);
	// 		id=count;
	// 		loop++;
		
	// 		// if(sudo[id]==null){
	// 		cls=$("#"+id).attr("class").split(' ');
	// 		box=$("."+cls[0]+"."+cls[2]);
	// 		row=$("."+cls[0]+"."+cls[1]);
	// 		col=$("."+cls[2]+"."+cls[3]);
	// 		check_box=check(num,box,id);
	// 		check_row=check(num,row,id);
	// 		check_col=check(num,col,id);
	// 		console.log(check_box+ " "+check_row+" "+check_col+"             ");
	// 		if(check_box==true&&check_row==true&&check_col==true){
	// 				sudo[id]=num;
	// 				$("#"+arr[id]).html(sudo[id]);
	// 				count++;
	// 				loop=0;
	// 			}		
	// 		// }	
	// 		if(loop==10){
	// 			count--;
	// 			sudo[count]="";
	// 			$("#"+arr[count]).html(sudo[count]);
	// 			loop=0;
	// 	  }
	// 	}	
	// 	return sudo;
 //  }
	// function random(){
	// 	var num, id, sudo=[],check_box, check_row, check_col,count=0, cls, arr=[], td, box, col, row;
	// 	td=$(".table2 td");
	// 	for(var i=0;i<td.length;i++){
	// 		arr[i]=$(td[i]).attr("id");
 //    }
 //  	while(count!=50){
 //  		num = Math.floor(Math.random() * 9)+1;
	// 		id=Math.floor(Math.random() * 81);
	// 		if(sudo[id]==null){
	// 			cls=$("#"+id).attr("class").split(' ');
	// 			box=$("."+cls[0]+"."+cls[2]);
	// 			row=$("."+cls[0]+"."+cls[1]);
	// 			col=$("."+cls[2]+"."+cls[3]);
	// 			check_box=check(num,box,id);
	// 			check_row=check(num,row,id);
	// 			check_col=check(num,col,id);
	// 			console.log(check_box+ " "+check_row+" "+check_col+"             ");
	// 			if(check_box==true&&check_row==true&&check_col==true){
	// 				sudo[id]=num;
	// 				$("#"+arr[id]).html(sudo[id]);
	// 				count++;
	// 			}	
 //  		}  
 //    }  
 //    return sudo;
	// }
})
