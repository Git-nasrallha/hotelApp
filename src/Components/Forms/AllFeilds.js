import React,{useState} from "react";
import {Field,ErrorMessage} from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ErrorText = ({children}) => {
    return (
        <div className="error">
            {children}
        </div>
    )
}

export const Input=({label,name,...rest})=>{
    return <>
        <label htmlFor={name}> {label} </label>
        <Field name={name} id={name} {...rest} />
        <ErrorMessage name={name} component={ErrorText} />
    </>
       
    
}

export const Textarea=({label,name,...rest})=>{
  return  <>
        <label htmlFor={name}> {label} </label>
        <Field name={name} id={name} {...rest} as='textarea'/>
        <ErrorMessage name={name} component={ErrorText} />
    </>
}

export const Select=({label,name,options,...rest})=>{
    return  <>
          <label htmlFor={name}> {label} </label>
          <Field name={name} id={name} {...rest} as='select'>
              {
                  options.map(option=>{
                      return <option key={option.value} value={option.value} > {option.key} </option>
                  })
              }
          </Field>
          <ErrorMessage name={name} component={ErrorText} />
      </>
  }

export const RadioButton=({label,name,options,...rest})=>{
    return <>
        <label > {label} </label>
        <Field name={name}  {...rest} > 
            {
                ({field})=>{
                    return options.map(option=>{
                                return <div key={option.value}>
                                    <input type="radio" id={option.value} {...field} value={option.value}
                                        checked={field.value===option.value} 
                                    />
                                    <label htmlFor={option.value}> {option.key} </label>
                                </div>
                            })
                    
                }
            }
        </Field>
        <ErrorMessage name={name} component={ErrorText} />
    </>
}  

export const DateField=({label,name,...rest})=>{
    const [startDate, setStartDate] = useState(new Date());
    return <>
        <label htmlFor={name}>{label} </label>   
        <DatePicker  id={name} {...rest} selected={startDate} onChange={date => setStartDate(date)} />
        <ErrorMessage name={name} component={ErrorText}/>
    </>
    
}