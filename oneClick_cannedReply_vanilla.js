var yourmsg = "This sounds like a good topic for the subreddit.\n\nUnfortunately I do not have the time to engage on this topic via email.\nI'm sorry :(";

function clickreply(){
	var spn = document.getElementsByTagName("span");
	for(i=0; i<spn.length; i++){
		var itm = spn[i].innerText;
		if(/^Reply/i.test(itm) === true){
			spn[i].click();
		}
	}	
}

function pasteMsg(){
	setTimeout(()=>{
    var spn = document.getElementsByTagName("div");
	for(i=0; i<spn.length; i++){
		var itm = spn[i].getAttribute("aria-label");
		if(/^Message body/i.test(itm) === true){
			spn[i].innerText = spn[i].innerText+ yourmsg;
		}
		}
	},111);
}

var reply = new Promise(resolve =>{
	resolve(clickreply());
});
reply.then(pasteMsg());
