
function SetOverStyle(id){var lnkid=document.getElementById(id);lnkid.className='menu-item parent current-menu-item'}
function IsStaticPage(pages,currentPage){var arr=new Array();arr=pages.split(',');for(var i=0;i<arr.length;i++){if(arr[i]==currentPage)
return true;}
return false;}
function set_cookie(cookie_name,cookie_value){document.cookie=cookie_name+"="+encodeURIComponent(cookie_value);}
function Get_Cookie(check_name){var a_all_cookies=document.cookie.split(';');var a_temp_cookie='';var cookie_name='';var cookie_value='';var b_cookie_found=false;for(i=0;i<a_all_cookies.length;i++){a_temp_cookie=a_all_cookies[i].split('=');cookie_name=a_temp_cookie[0].replace(/^\s+|\s+$/g,'');if(cookie_name==check_name){b_cookie_found=true;if(a_temp_cookie.length>1){cookie_value=unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,''));}
return cookie_value;break;}
a_temp_cookie=null;cookie_name='';}
if(!b_cookie_found){return null;}}
function showonlyone(){if(document.getElementById("hdn_PageId")!=null){var submenuid=parseInt(document.getElementById("hdn_PageId").value);var catbox=document.getElementsByTagName("a");for(var x=0;x<catbox.length;x++){name=catbox[x].getAttribute("name");if(name=='catbox'){var iid=parseInt(catbox[x].id);if(iid==submenuid){catbox[x].style.color="#000";}}}}}
