export default (state=null, action)=>{
	switch(action.type){
	case 'getWeather':
		console.log(action.payload);
		return (action.payload);
		break;
	case 'other':
		return {stupid: 'stupid'}
		break;
	}
	return state;
}