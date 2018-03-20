$(document).ready(function(){
	var count=0, id=0, cls, input,disable=[], solution,disp;
	var sudo1=[[8,2,7,1,5,4,3,9,6],[9,6,5,3,2,7,1,4,8],[3,4,1,6,8,9,7,5,2],[5,9,3,4,6,8,2,7,1],[4,7,2,5,1,3,6,8,9],[6,1,8,9,7,2,4,3,5],[7,8,6,2,3,5,9,1,4],[1,5,4,7,9,6,8,2,3],[2,3,9,8,4,1,5,6,7]];
  var sudo2=[[7,3,5,6,1,4,8,9,2],[8,4,2,9,7,3,5,6,1],[9,6,1,2,8,5,3,7,4],[2,8,6,3,4,9,1,5,7],[4,1,3,8,5,7,9,2,6],[5,7,9,1,2,6,4,3,8],[1,5,7,4,9,2,6,8,3],[6,9,4,7,3,8,2,1,5],[3,2,8,5,6,1,7,4,9]];
  var arr=[sudo1,sudo2];
	tab="<table id='table1' border='3'>"
	for(var i=0;i<3;i++){
		tab=tab+" <tr> ";
		for(var j=0;j<3;j++){
			tab=tab+"<td> <table class='table2' border='2'>";
			for(var l=0;l<3;l++){
				tab=tab+"<tr>"
				for(var k=0;k<3;k++){
					tab=tab+"<td id='"+count++ +"' class='tr"+i+" itr"+l+" cl"+j+" icl"+k+"'>"+"</td> ";
				}
			}		
			tab=tab+"</tr> </table> ";
		}
		tab=tab+"</td> </tr>";	
	}
	tab=tab+"</table>";
	$("#tables").append("</table>"+tab);
	id=random(arr);
	cls=$('#'+id).attr("class").split(' ');
	$(".table2 td").click(function(){	
		if(disable.indexOf($(this).attr("id"))<0){
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
				$("#"+id).css("background-color","#E5BEB9" )
			}
			$(this).css("background-color","#CAEDFA")
			$(".numbers").removeAttr('disabled')
			id=$(this).attr("id");	
			cls=$(this).attr("class").split(' ');	
			win()
	  }
	})
	function win(){
		var flag=1;
		for(i=0;i<81;i++){
			if(solution[i]!=$('#'+disp[i]).html()){
				flag=0;
				break;
			}
		}	
		if(flag==1)
			alert("You Won")
	}
	$(".numbers").click(function(){
		var val;
		val=$(this).val();
		if(val!=0){
			$("#"+id).html(val);
		}
		else
			$("#"+id).html("");
	})	
	$("#restart").click(function(){
		location.href="sudoku.html";
	});
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
	function random(arr){
		var ran=Math.floor(Math.random() * 2);
		var sudo=[],array=[[]], index,count=0,cls,count2=0,id;
		disp=[];
		solution=[];
		array=arr[ran];
		sudo=rows(0,sudo);
		sudo=rows(3,sudo);
		sudo=rows(6,sudo);
		for(var i=0;i<9;i++){
			index=sudo[i];
			for(var j=0;j<9;j++){
				solution[count]=array[index][j];
				count++;
			}
		}
		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				var cls1="tr"+i;
				var cls2="itr"+j
				cls=$('.'+cls1+'.'+cls2)
		 		for(k=0;k<cls.length;k++){
		 			disp.push($(cls[k]).attr("id"))
			  }
		  }
		}
		while(count2!=30){
			var num=Math.floor(Math.random() * 81);
			if($('#'+disp[num]).html()==""){
				$('#'+disp[num]).html(solution[num]);
				disable.push(disp[num]);
				id=disp[num]
				count2++;
			}		
		}	console.log(solution)
		return(id);
	}
	function rows(min,sudo){
		var num, arr=[];
		while(arr.length!=3){
			num=Math.floor(Math.random() * 3)+min;
			if(arr.indexOf(num)<0){
				arr.push(num);
				sudo.push(num);
			}		
		}
		return(sudo);
	}	
})