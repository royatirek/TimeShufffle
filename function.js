// JavaScript Document
var imp1=[ ["Digital",0.5] , ["Machine",1] , ["CAT",1] ,["Power System",1]  , ["Signal and System",1] , 
["Miscellaneous",1] ];
var old_index=6;
var imp2=[ ["Meteor",2] , ["JAVA",2] , ["C",2],["CAT",2] ];
var phrs=0,shrs=0,total_shrs=0,total_phrs=0,prob_cal,relax_ratio;
var index=0;


		//Try to find the order for imp1 subjects
		function pselecter()
		{
			"use strict";
		index=Math.floor(Math.random()*6);
						if(old_index!=index && total_phrs<4*relax_ratio)
						{	
						//To calculate hrs to study from (1 to 2)*no of hrs
						var mul=(Math.floor((2*Math.random()))+1);
						phrs=imp1[index][1]*mul;
						$("#message").html("Study "+imp1[index][0]+" for "+phrs+"hrs.");
						//Use below function when above function is not working.
						//alert("Study "+imp1[index][0]+" for "+phrs+"hrs.");
						total_phrs=total_phrs+phrs;
						}
						else if(total_phrs>=4*relax_ratio)
						{
							sselecter();
						
						}
						else
						{
							pselecter();
						}						
		old_index=index;
		
		}
		//Try to find the rorder imp2 subjects
		function sselecter()
		{
				"use strict";
				index=Math.floor(Math.random()*4);
						if(old_index!=index && total_shrs<6*relax_ratio)
						{	
						
						var mul=Math.floor((Math.random()))+1;
						shrs=imp2[index][1]*mul;
						$("#message").html("Study "+imp2[index][0]+" for "+shrs+"hrs.");
						//Use below function when above function is not working.
						//alert ("Study "+imp2[index][0]+" for "+shrs+"hrs.");
						total_shrs=total_shrs+shrs;
						
						}
						else if((total_shrs+total_phrs)>=10*relax_ratio && total_shrs >=6*relax_ratio)
						{
						alert("Relax");
						 document.getElementById('shuffle').removeEventListener("click",probab);
						
						}
						else if( total_phrs<4*relax_ratio)
						{
							pselecter();
						}
						else
						{
							sselecter();
						}	
				old_index=index;
		
		}
		//calculates the probabilty for different days.
		function probab()
		{
			var d = new Date();
			var n = d.getDay();
				if(n==0 || n==6 || n==3)
					{
						prob_cal=Math.floor(3*Math.random());
						relax_ratio =1;
						
					}
				else if(n==1)
					{
						prob_cal=1;
						relax_ratio=1;
					}
				else
					{
						prob_cal=Math.floor(3*Math.random());
					}
					//Different if function
				if(prob_cal % 2==0)
					{
					sselecter();
					relax_ratio=0.4;
					}
				else
					{
					pselecter();
					relax_ratio=0.5;
					}
			}
		
		
    
	//error was caused when window.load was not there as html was rendered after javascript was loaded.click function should be added after the whole DOM has loaded.
	window.onload = function () {
	
    document.getElementById('shuffle').addEventListener("click",probab);
	
};
