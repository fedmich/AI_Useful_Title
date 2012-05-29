/*
 * Returns a string after cleaning junks, for use as post title
 */
function ai_useful_title ( str ){
	if(! str){
		return '';
	}
	var ret = decodeURI( str );
	
	//trim extra spaces
	ret = ret.replace( /^\s+|\s+$/g , '');
	switch(ret){
	case 'I':
	case '|':
		//string not too useful
		return '';
	}
	
	var ms_tcount = ret.match(/\d/g);
	if( ms_tcount ){
		if( ms_tcount.length >  16){
			//if there are more than 16 numbers, don't use this as title
			return '';
		}
	}
	
	if(ret.match(/tumblr.*jpg/i)){
		//filename not too useful
		return '';
	}
	
	if( ret.match(/(DSCN\d\d.*|DSC\d\d.*)/i)){
		return ''; //Camera pictures
	}
	
	//remove extension
	ret = ret.replace(/\.(jpeg|jpg|png|gif)$/i,'');
	
	//if ending with dot, remove dot.
	ret = ret.replace(/\.$/i,'');
	
	//underscore to space
	ret = ret.replace(/_/g,' ');
	
	//replace characters + to space
	ret = ret.replace( /[+]/g , ' ');
	
	//replace double-space to space
	ret = ret.replace( /  /g , ' ');
	
	//trim extra spaces
	ret = ret.replace( /^\s+|\s+$/g , '');
	
	//If chars is less than 3 chars, it's not too useful.
	if( ret.length < 3){
		return ''; //too short
	}
	return ret;
}