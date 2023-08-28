import { useMemo, useState } from 'react';
import CustomInput from '../CustomInput/CustomInput';
import { toCamelCase } from '../utils';
import { isEmail, isEmpty } from 'validator';

import './PersonalForm.css';

const PersonalForm = ({textInputs, handleSubmit}) => {
    const initialInputState = textInputs.reduce((o, key) => ({ ...o, [toCamelCase(key)]: false }), {});
    
    const [validInputs, setValidInputs] = useState(initialInputState);

    const isFormValid = useMemo(() => {
        return Object.keys(validInputs).every((k) => validInputs[k] === true) 
    }, [validInputs]);
    
    const onInputChange = (inputName, value) => {
        if(inputName === 'email'){
            setValidInputs(prevState => ({
                ...prevState,
                email: isEmail(value)
            }))
        } else if (inputName === 'message') {
            setValidInputs(prevState => ({
                ...prevState,
                message: value.length >= 10
            }))
        } else {
            setValidInputs(prevState => ({
                ...prevState,
                [inputName]: !isEmpty(value)
            }))
        }
    }


    return (
        <div>
            <h1>Personal Form</h1>
            <form
                id="personal-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e.target.elements);
                }}
            >
                {textInputs.map(name => (
                    <CustomInput name={name} key={name} error={!validInputs[toCamelCase(name)]} onChange={onInputChange}/>
                ))}
                <button type="submit" id='submit-button' disabled={!isFormValid}>Submit</button>
            </form>
        </div>
    )
};

export default PersonalForm