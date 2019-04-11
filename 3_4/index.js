// JavaScript Document
var oinput=document.getElementsByTagName('input')[0];
		//鑾峰彇澶栭儴鏍峰紡
		function getStyle(obj, name)
		{
			if(obj.currentStyle)
			{
				return obj.currentStyle[name];
			}
			else
			{
				return getComputedStyle(obj, false)[name];
			}
		}
		//娓愬彉鍔ㄧ敾
		function move(){
//			clearInterval(obj.timer);
//			obj.timer=setInterval(function(){
//				var cur=parseInt(getStyle(obj,attr));
//				var itarget=parseInt(tar);
//				var speed=(itarget-cur)/6;
//				speed=speed>0?Math.ceil(speed):Math.floor(speed);
//				obj.style[attr]=parseInt(getStyle(obj,attr))+speed+'px';
//				if(speed==0){
//					clearInterval(obj.timer);
//				}
//			},30);
alert("琛ㄨ揪寮忔湁閿欒锛岃杈撳叆姝ｇ‘琛ㄨ揪寮�");
		}
		//浜嬩欢缁戝畾鍑芥暟
		function addEvent(obj,ev,fun){
			if(obj.attachEvent){
				obj.attachEvent('on'+ev,fun);
			}else{
				obj.addEventListener(ev,fun,false);
			}
		}
		//闃绘榛樿琛屼负
		function stopEvent(ev){
			var e=ev||window.event;
			if(e.preventDefault){
				e.preventDefault();
			}
			else{
				e.returnValue=false;//ie
			}
		}
		//璁＄畻鏈€缁堢粨鏋�
		function getResult(){
			function evalResult(){
				var result=eval(oinput.value);
				return result;			
			}
			//鎹曡幏寮傚父
			try{
				var x=evalResult();
				return x;
			}
			catch (e){
				oinput.className='showError';
				var errorHint=document.getElementById('errorHint');
				move();
				setTimeout(function(){
					oinput.className='';
					move(errorHint,'top',-282);
				},2000);
				return oinput.value;
			}
		}
		//鏂囨湰妗嗚幏鍙栫劍鐐癸紝閿欒鎻愮ず娑堝け
		//鎸変笅鍥炶溅寰楀埌缁撴灉
		function enterResult(ev){
			var e=ev||window.event;
			if(e.keyCode==13){
				stopEvent(ev);//闃绘enter閿殑榛樿琛屼负
				var result=getResult();
				oinput.value=result;
			}
		}
		//缁戝畾鐐瑰嚮浜嬩欢
		function init(){
			var otable=document.getElementsByTagName('table')[0];
			addEvent(otable,'keydown',function(ev){
				enterResult(ev);
			});
			addEvent(otable,'click',function(ev){
				stopEvent(ev);
				var e=ev||window.event;
				var itat=e.target||e.srcElement;
				var obtns=document.getElementsByTagName('button');
				if(itat.nodeName.toLowerCase()=='button'){
					for(var i=0;i<obtns.length;i++){
						obtns[i].style.borderColor='#000';
					}
					itat.style.borderColor='white';
					if(itat.className!='setChange'){
						if(oinput.value=='0'){
							oinput.value='';
							oinput.value+=itat.innerHTML;
						}
						else{
							oinput.value+=itat.innerHTML;
						}
					}else{
						if(itat.id=='backSpace'){
							oinput.value=oinput.value.toString().slice(0,-1);
						}
						else if(itat.id=='clearNum'){
							oinput.value='0';
						}else{
							var result=getResult();
							oinput.value=result;
						}
					}
				}
			});
		}
		init();