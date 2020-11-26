import React, { forwardRef, useImperativeHandle } from "react";
import './inputField.css'

const InputField = forwardRef((props, ref) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
    setError("");
    props.onChange(event.target.name, event.target.value)
  }

  const validate = () => {
    //return true if it's valid 
    //else return false

    if (props.validation) {
      const rules = props.validation.split("|");

      for (let i = 0; i < rules.length; i++) {
        const current = rules[i];

        if (current === "required") {
          if (!value) {
            setError("This field is required");
            return false
          }
        }

        const pair = current.split(":")
        switch (pair[0]) {
          case "email":
            const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!reg.test(String(value).toLowerCase())){  
              setError(`Please enter valid email address`);
              return false
            }
            break;
          case "min":
            if (value.length < pair[1]) {
              setError(`This field must be at least ${pair[1]} characters long`);
              return false
            }
            break;
          case "max":
            
            if (value.length > pair[1]) {
              setError(`This field must be no longer than ${pair[1]} characters long`);
              return false;
            }
            break;
          default:
            break;
        }
      }
    }

    return true;
  }

  useImperativeHandle(ref, () => {
    return {
      validate: () => validate()
    }
  })

  return (
    <div className="input-wrapper">
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={(event) => handleChange(event)}
        type={props.type}
        value={props.value ? props.value : value}
        autoComplete={props.autoComplete}
      />
      {error && (
        <p className="error">{error}</p>
      )}
    </div>
  )
})

InputField.defaultProps = {
  placeholder: "",
  name: "",
  value: "",
  autoComplete: "off",
  validation: ""
}


export default InputField;