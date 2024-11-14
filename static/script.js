function mobileMenu(){var e=document.getElementById("myTopnav");"topnav"===e.className?(e.className+=" responsive"):(e.className="topnav")}
function getCookieVal(e){var o=document.cookie.indexOf(";",e);return(-1==o&&(o=document.cookie.length),unescape(document.cookie.substring(e,o)));}
function GetCookie(e){for(var o=e+"=",t=o.length,n=document.cookie.length,i=0;i<n;){var a=i+t;if(document.cookie.substring(i,a)==o)return getCookieVal(a);if(0==(i=document.cookie.indexOf(" ",i)+1))break;}
return null;}
function SetCookie(e,o){var t=SetCookie.arguments,n=SetCookie.arguments.length,i=2<n?t[2]:null,a=3<n?t[3]:null,c=4<n?t[4]:null,t=5<n&&t[5];document.cookie=e+"="+
escape(o)+
(null==i?"":"; expires="+i.toGMTString())+
(null==a?"":"; path="+a)+
(null==c?"":"; domain="+c)+
(1==t?"; secure":"");}
function DisplayInfo(){var e,o,t=new Date();t.setTime(t.getTime()+31536e6),(e=GetCookie("visit"))||(e=0),SetCookie("visit",++e,t,"/",null,!1),1==e&&(o="Hey, Welcome!"),2==e&&(o="Welcome Again, did you invite bot yet?"),3==e&&(o="You visiting this site again and again feels kinda creepy"),4==e&&(o="Bruhh, you again??, Did you try to open inspect element?"),5==e&&(o="Bruhh go get a job"),6==e&&(o="You need a hobby!"),7==e&&(o="Nothing better to do?"),8==e&&(o="Don't you ever sleep?"),9==e&&(o="Get a life!!!"),10<=e&&(o="Rent is due on the 1st of the month!"),alert(o);}
function inv(){(policywnd=window.open("/s/invite","pcrew_policy","width=496,height=550,left=390,top=300,menubar=no,status=no,toolbar=no")),policywnd.focus();}
function srv(){(policywnd=window.open("/s/server","pcrew_policy","width=496,height=437,left=374,top=394,menubar=no,status=no,toolbar=no")),policywnd.focus();}
function bug(){(policywnd=window.open("/s/bug","_blank","width=572,height=594,left=352,top=254,menubar=no,status=no,toolbar=no")),policywnd.focus();}
function tos(){document.getElementsByTagName("title")[0].innerHTML="ORION | TOS";}
function home(){document.getElementsByTagName("title")[0].innerHTML="ORION";}
function prt(){document.getElementsByTagName("title")[0].innerHTML="ORION | Partners";}
(document.onkeydown=function(e){return 123==event.keyCode||(e.ctrlKey&&e.shiftKey&&e.keyCode=="I".charCodeAt(0))||(e.ctrlKey&&e.shiftKey&&e.keyCode=="C".charCodeAt(0))||(e.ctrlKey&&e.shiftKey&&e.keyCode=="J".charCodeAt(0))||(e.ctrlKey&&e.keyCode=="U".charCodeAt(0))?(alert("Who is you bruh?"),!1):void 0;}),document.addEventListener("contextmenu",(e)=>e.preventDefault()),document.addEventListener("developertools",(e)=>e.preventDefault()),document.addEventListener("inspect_element",(e)=>e.preventDefault()),console.log("%c+%chttps://orion-bot.xyz\n%cOrion Bot's Official Website",'font-size: 1px; margin-bottom: 5px; margin-left: 40px; padding: 10px 15px; line-height: 12px;background: url("https://orion-bot.xyz/images/logo.png"); background-repeat: no-repeat; background-size: 30px; color: transparent;','padding-left: 2px; font-size: 14px; color: #7289DA; font-family: "Roboto", sans-serif','padding-left: 15px; font-size: 11px; font-family: "Roboto", sans-serif; '),(window.onload=DisplayInfo);