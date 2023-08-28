import './App.css';
import PersonalForm from './PersonalForm/PersonalForm';
import TableData from './TableData/TableData';
import { addPerson } from './store';
import { useDispatch } from 'react-redux';
import { toCamelCase } from './utils';

function App() {
  const textInputs = ['First Name', 'Last Name', 'Email', 'Message'];
  const dispatch = useDispatch();

  const onSubmit = (elements) => {
    const newState = textInputs.reduce((o, key) => ({ ...o, [key]: elements[toCamelCase(key)].value }), {})

    dispatch(
      addPerson({ ...newState })
    )
  }

  return (
    <div className="App">
      <PersonalForm textInputs={textInputs} handleSubmit={onSubmit} />
      <div>
        <TableData />
      </div>
    </div>
  );
}

export default App;
