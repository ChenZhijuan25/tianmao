$(function(){
      //anniu
    var btnc=$("#btn");
    btnc.onfocus=function(){
        if(btnc.value=="猫猫狗狗购物狂欢，给你最好的"){
            btnc.value="";
        }
        
    }
    btnc.onblur=function(){
        if(btnc.value){
        }else{
           btnc.value="猫猫狗狗购物狂欢，给你最好的";
        }
                 
    }
    //search-anniu
    var btn1=$("#btn1");
    btn1.onfocus=function(){
        if(btn1.value=="猫猫狗狗购物狂欢，给你最好的"){
            btn1.value="";
        }
        
    }
    btn1.onblur=function(){
        if(btn1.value){
        }else{
           btn1.value="猫猫狗狗购物狂欢，给你最好的";
        }
                 
    }
    // top
    var wodtb=$(".wodtb")[0];
    var tbxiala=$(".tbxiala")[0];
    var shouc=$(".shouc")[0]
    var scxiala=$(".scxiala")[0]
    var erweima=$(".erweima")[0];
    var sjxiala=$(".sjxiala")[0];
    var shangj=$(".shangj")[0];
    var zcxiala=$(".zcxiala")[0]; 
    wodtb.onmouseover=function()
    {
        tbxiala.style.display="block";
    }
    wodtb.onmouseout=function()
    {
        tbxiala.style.display="none";
    }

    shouc.onmouseover=function()
    {
        scxiala.style.display="block";
    }
    shouc.onmouseout=function()
    {
        scxiala.style.display="none";
    }

    erweima.onmouseover=function()
    {
        sjxiala.style.display="block";
    }
    erweima.onmouseout=function()
    {
        sjxiala.style.display="none";
    }

    shangj.onmouseover=function()
    {
        zcxiala.style.display="block";
    }
    shangj.onmouseout=function()
    {
        zcxiala.style.display="none";
    }


    // lunzuo
    var lunboc=getClass("lunboc");
    var lunbos=getClass("lunbos");
    var xiao1=getClass("xiao1");
    
    var yanse1=["#ffa800","#0979DD","#FFC6D7","#FDCDE7","#B5B5B5","#F9AD8D"
    ,"#ffa800","#0979DD","#FFC6D7","#FDCDE7","#B5B5B5","#F9AD8D","#ffa800","#0979DD",
    "#FFC6D7"];
    var quanbj;
    var lunborightt=getClass("lunborightt");
    
    for(var i=0;i<lunboc.length;i++){
        lunboc[i].a=i;
        lunboc[i].onmouseover=function(){
            lunbos[this.a].style.display="block";
            if(this.a>0){
                for(var y=0;y<lunborightt.length;y++){
                        lunborightt[y].style.display="none";
                    }
                if(this.a%3==0){
                    lunborightt[0].style.display="block";
                }
                if(this.a%3==1){
                    lunborightt[1].style.display="block";
                }
                if(this.a%3==2){
                    lunborightt[2].style.display="block";
                }
                clearInterval(time);
                // xiao1[this.a].style.background;
                lunbo.style.background=yanse1[this.a];
            }

        };
       lunboc[i].onmouseout=function(){
            if(this.a>0){
                time=setInterval(move,1000);
                //xiao1[this.a].style.display="none";
                lunbo.style.background=quanbj;
            }
            lunbos[this.a].style.display="none";
        };
    }
    for(var j=0;j<lunbos.length;j++){
        lunbos[j].a=j;
        lunbos[j].onmouseover=function(){
            lunbos[this.a-1].style.display="block";
        };
        lunbos[j].onmouseout=function(){
            lunbos[this.a-1].style.display="none";
        };
    }

	//lunbo
    var lunimgs= $(".lunimgs"); 
    var lunboxiao=$(".lunboxiao");
    var lunbo=$(".lunbo")[0];
    var yanse=["#ffa800","#0979DD","#FFC6D7","#FDCDE7","#B5B5B5","#F9AD8D"];
    var num=1;
    function move(){
    	if(num==6){
    		num=0;
    	}
        for(var i=0;i<lunimgs.length;i++){
        	lunimgs[i].style.zIndex=2;
        	lunboxiao[i].style.background="#333";
        }
		lunimgs[num].style.zIndex=3;
		lunboxiao[num].style.background="pink";
        lunbo.style.background=yanse[num];
		num++;
    }
    var time=setInterval(move,2000);
    for(var i=0;i<lunboxiao.length;i++){
    	lunboxiao[i].lun=i;
    	lunboxiao[i].onmouseover=function(){
    		clearInterval(time);
            for(var j=0;j<lunimgs.length;j++){
            	lunimgs[j].style.zIndex=2;
            	lunboxiao[j].style.background="#333";

            }
    		lunimgs[this.lun].style.zIndex=3;
    		lunboxiao[this.lun].style.background="pink";
            lunbo.style.background=yanse[this.lun];
    	}
    	lunboxiao[i].onmouseout=function(){
    		time=setInterval(move,2000);
    		num=this.lun+1;
    	}	
    }

    //remen
	// var guoji=$(".guoji");
	// var remen=$(".remen-center");
	// for(var i=0;i<guoji.length;i++){
	// 	guoji[i].index=i;
	// 	guoji[i].onclick=function(){
 //           for(var j=0;j<remen.length;j++){
 //           	   remen[j].style.display="none";
 //           	   guoji[j].style.textDecoration="none";
 //               guoji[j].style.fontWeight="normal";
          
 //           }
	//         remen[this.index].style.display="block";
	// 		this.style.textDecoration="underline";
	// 		this.style.fontWeight="bold";
	// 	}
	// }

    //remenxin
	// var block=$(".block");
	// var taoxin=$(".taoxin");
	// for(var i=0;i<block.length;i++){
	// 	block[i].index=i;
	// 	block[i].onmouseover=function(){
	// 		taoxin[this.index].style.display="block";
	// 	}
	// 	block[i].onmouseout=function(){
	// 		taoxin[this.index].style.display="none";
	// 	}
	// }

    // remen
    var onearr=[];
    var twoarr=[];
    var threearr=[];
    var fourarr=[];
    var remen=$(".remen-xiao");
    var guoji=$(".guoji");
    var huan=$(".huan")[0];
    for(var i=0;i<48;i++){
        onearr.push("img/remen/tu-"+i+".jpg");
        twoarr.push("img/remen/tu-"+i+".jpg");
        threearr.push("img/remen/tu-"+i+".jpg");
        fourarr.push("img/remen/tu-"+i+".jpg");
    }
    function randomImg(arr){
        var newarr=[];
        for(var i=0;i<24;i++){
            newarr.push(arr[parseInt(Math.random()*48)]);
        }
        return newarr;
    }
    var arrd=[onearr,twoarr,threearr,fourarr];
    function show(num){
        var imgarr=randomImg(arrd[num]);
        for(var i=0;i<imgarr.length;i++){
            var divs=document.createElement("div");
            divs.style.cssText="width:132px;height:80px;float:left;background:white;margin-right:2px;margin-bottom:2px;position:relative"
            var as=document.createElement("a");
            as.href="#";
            var imgs=document.createElement("img");
            imgs.src=imgarr[i];
            imgs.style.cssText="width:90px;height:45px;position:absolute;left:21px;top:17px;";
            as.appendChild(imgs);
            divs.appendChild(as);
            remen[num].appendChild(divs);

        }
    }
    show(0)
    for(var i=0;i<guoji.length;i++){
        guoji[i].cf=i;
        guoji[i].kaiguan=true;
        guoji[0].kaiguan=false;
        var now=0;
        guoji[i].onclick=function(){
            now=this.cf;
            for(var j=0;j<remen.length;j++){
                remen[j].style.display="none";
                 guoji[j].style.textDecoration="none";
                 guoji[j].style.fontWeight="normal";
            }
            remen[this.cf].style.display="block";
            this.style.textDecoration="underline";
            this.style.fontWeight="bold";
            if(this.kaiguan){
                show(this.cf);
                this.kaiguan=false;
            }
        }
    }
    huan.onclick=function(){
         remen[now].innerHTML="";
         show(now);
     }
    //通过小按钮来控制轮播    
    function aa(a){
     var louc=$(".lou-chang")[a];
     var prevbtn=$(".prevbtn")[a];
     var nextbtn=$(".nextbtn")[a];
     function moveleft(){
        animate(louc,{left:-95},600,Tween.Linear,function(){
            var first=getFirst(louc);
            louc.appendChild(first);
            louc.style.left=0;
        })
     }
     //var t=setInterval(moveleft,2000);
     function moveright(){
        var last=getLast(louc);
        louc.insertBefore(last,getFirst(louc));
        animate(louc,{left:95},600,Tween.Linear);
        louc.style.left=-95+"px";
        animate(louc,{left:0},600,Tween.Linear);
     }
     var t=setInterval(moveright,2000);
     prevbtn.onmouseover=nextbtn.onmouseover=function(){
        clearInterval(t);
    }  
    prevbtn.onmouseout=nextbtn.onmouseout=function(){
        t=setInterval(moveright,2000);
     }
     prevbtn.onclick=function(){
        moveleft();
     }
     nextbtn.onclick=function(){
        moveright();
     }

}
for(var i=0;i<6;i++){
    aa(i);
}


     // 搜索框的显示与隐藏
     var search=$(".search")[0];
     var jump=$(".jump")[0];
     var floors=$(".lou1-con");
     var btn=$("li",jump);
     // alert(btn.length)
     var kaiup=true;
     var kaidown=true;
     for(var i=0;i<btn.length;i++){
            btn[i].index=i;
            btn[i].onclick=function(){
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
            }
        }

     window.onscroll=function(){
        var scrollT=getScrollT();
        // document.title=scrollT;
        if(scrollT>=400){
            if(kaiup){
               animate(search,{top:0},500);
               kaiup=false; 
               kaidown=true;
            }
            
        }else{
            if(kaidown){
               animate(search,{top:-50});
               kaidown=false;
               kaiup=true; 
            } 
        }

        // 楼层跳转
        var ch=document.documentElement.clientHeight;
        if(scrollT>=1000){
            jump.style.display="block";
        }else{
            jump.style.display="none";
        }
        for(var i=0;i<floors.length;i++){

            floors[i].t=floors[i].offsetTop;
            if(floors[i].t<scrollT+ch){
              for(var j=0;j<btn.length;j++){
                        btn[j].style.background="";
                    }
              btn[i].style.background="red";
              
              var imgs=$("img",floors[i]);//获取当前楼层的所有图片
              for(var j=0;j<imgs.length;j++){//遍历图片
                 imgs[j].src=imgs[j].getAttribute("ac");//把每一个图片的aa属性的值赋值给src属性即可
              }
              
            }
        }

        //按需加载
            // for(var i=0;i<floors.length;i++){
            // if(floors[i].offsetTop<scrollT+ch){//当前楼层到顶部的高度如果小于页面内容超出浏览器的距离+浏览器的距离时
            //     var imgs=$("img",floors[i]);//获取当前楼层的所有图片
            //     for(var j=0;j<imgs.length;j++){//遍历图片
            //         imgs[j].src=imgs[j].getAttribute("aa");//把每一个图片的aa属性的值赋值给src属性即可
            //     }
            //     //alert(imgs.length)
            // }

     }

    // movel
      function movels(d){
        var movel=$(".lou1-right")[d];
        var btnimgs=$("img",movel);
            for(var i=0;i<btnimgs.length;i++){
                btnimgs[i].cc=i;
                btnimgs[i].onmouseover=function(){
                    btnimgs[this.cc].style.cssText="margin-left:-3px";
                }
                btnimgs[i].onmouseout=function(){
                    btnimgs[this.cc].style.cssText="margin-left:0px";
                }
            }
      }  
    for(var i=0;i<12;i++){
        movels(i);
    }
    
    // youguidng
    var bian=$(".bian");
    var zuozi=$(".zuozi");
    for(var i=0;i<bian.length;i++){
        bian[i].zi=i;
        bian[i].onmouseover=function(){
            zuozi[this.zi].style.display="block";
            animate(zuozi[this.zi],{right:35,opacity:1},500,Tween.Linear);
        }
        bian[i].onmouseout=function(){
            zuozi[this.zi].style.display="none";
            animate(zuozi[this.zi],{right:70,opacity:0},500,Tween.Linear);
        }
    }
})