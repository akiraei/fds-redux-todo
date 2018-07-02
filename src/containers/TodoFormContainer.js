import redux from 'redux';
import {connect} from 'react-redux'
import {addTodoFunc} from '../store'
import TodoForm from '../components/TodoForm'


function mapStateToProps(state) {
  return {};

}

function mapDispatchToProps(dispatch) {
  return {
    onCreate: body => {
      dispatch(addTodoFunc(body));


    }
  }
}


export default connect (
  mapStateToProps,
  mapDispatchToProps
  


)(TodoForm)