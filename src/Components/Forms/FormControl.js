import React from 'react';
import { Input,Textarea,Select,RadioButton,DateField} from './AllFeilds';

const FormControl = (props) => {
    const {control,...rest}=props;
        switch(control){
            case "input":
                return <Input  {...rest} />
            case "textarea":
                return <Textarea {...rest} />
            case "select":
                return <Select {...rest} />
            case "radio": 
            return <RadioButton {...rest} /> 
            case "date":
                return <DateField {...rest}/>       
            default: 
                return null 
        }
    
}

export default FormControl
