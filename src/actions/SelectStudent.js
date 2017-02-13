export default function SelectStudent(student){
	console.log(student);
	return {
		type: "PICK_STUDENT",
		payload: student
	}
}