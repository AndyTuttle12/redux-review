import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent';
import { bindActionCreators } from 'redux';

class StudentList extends Component{
	render(){
		const studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li key={student.name} onClick={()=>this.props.selectStudent(student.name)}>
					{student.name} -- {student.seat}
				</li>
			)
			return studentArray;
		});
		return(
			<div className="App">
				{studentArray}
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		students: state.students
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		selectStudent: SelectStudent
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);