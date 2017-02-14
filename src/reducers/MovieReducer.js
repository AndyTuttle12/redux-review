export default (state = null, action)=>{
	console.log(action.type);
	switch(action.type){
		case "getMovies":
		console.log("needed");
		return action.payload;
	}
	return state;
}