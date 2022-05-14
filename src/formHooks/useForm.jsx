import React, { useState, useEffect, useRef } from "react";
import * as yup from "yup";

export default function useForm(initialValue) {
  const [value, setValue] = useState(initialValue);
  console.log("value----formhooks---->", value);

  //errors for form validation
  const [errors, setErrors] = useState(value);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const ref = useRef();

  //Form validation error for inputs
  let formSchema = yup.object().shape({
    content: yup
      .string()
      .required("please enter content")
      .min(3, "min of 3 characters needed on content input"),
    image: yup.mixed().required("please upload a file"),
  });

  useEffect(() => {
    formSchema.isValid(value).then((valid) => {
      console.log("button enabled--->", valid);
      setButtonDisabled(!valid);
    });
  }, [formSchema, value]);
  console.log("errors-...>", errors);

  //validate for errors if inputs are not filled out completely based on yup
  function validateChanges(e) {
    //get by input name
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.type === "file" ? e.target.files[0] : e.target.value)
      .then((valid) => {
        console.log("valid, no errors---->", valid);
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        console.log("errors on yup validation---->", err.errors);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  }

  function handleChanges(e) {
    e.persist();
    validateChanges(e);
    console.log(e.target.name, e.target.value, e.target.files);
    setValue({
      ...value,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  }
  return [value, setValue, errors, buttonDisabled, ref, handleChanges];
}
