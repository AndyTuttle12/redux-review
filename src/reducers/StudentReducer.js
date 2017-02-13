const students = (state, action)=>{

	const studentsArray =  [
		{
			name:"Casey",
			seat:9
		},
		{
			name:"Connie",
			seat:10
		},
		{
			name:"Sarah",
			seat:11
		},
		{
			name:"Andy",
			seat:12
		}
	];
	if(action.type==="PICK_STUDENT"){
		return action.payload;
	}else{
		return studentsArray;
	}
}

export default students;