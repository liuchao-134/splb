var ctboxs=document.getElementById('ct');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleHeight=30;
var contentHeight=150;
for(var i=0;i<ctbox.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			n=this.index;
			if(i<=n){
				ctbox[i].style.top=titleHeight*i+'px';
			} else {
				ctbox[i].style.top=titleHeight*i+contentHeight+'px';
			}
		}
	}
}