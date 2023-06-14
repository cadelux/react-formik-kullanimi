import React from 'react'
import './signup.css'
import validationSchema from './validations';

import {useFormik} from 'formik';


function Signup() {

const {handleSubmit,handleChange,values,errors,touched,handleBlur}= useFormik({ // formikin bize sunduğu errors'da hata mesajı varsa, işte o değer gerekliyse vs. durumlarda kullanılabilir.
    // touched ise mouse o input üstüne gelip ayrıldığında demek.
    // errors,touched,handlebluru beraber kullandık.
     initialValues:{
        email: '',
        password:'',
        passwordConfirm:'',
},
onSubmit:(values) => {
    console.log(values) 
   },
   
   validationSchema,    

});


  return (
      <div className='App2'>
    <h1>Sign Up</h1>
    <form className='form01' onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input name='email' onChange={handleChange} value={values.email} onBlur={handleBlur}/>
          {errors.email && touched.email && (<div>{errors.email}</div>)}

          <br/>
          <br/>

          <label htmlFor="password">Password</label>
          <input name='password' onChange={handleChange} value={values.password} onBlur={handleBlur}/>
          {errors.password && touched.password && (<div>{errors.password}</div>)}         

          <br/> 
          <br/>


          <label htmlFor="confirmPassword">Confirm Password</label>
          <input name='confirmPassword' onChange={handleChange} value={values.confirmPassword}/>
          
          <br/>
          <br/>



          <button type="submit">Submit</button>
          <br/>
          <br/>
  
          
          <p>Mail : { values.email && JSON.stringify(values.email)}</p>
          
          <p>Password : {values.password && JSON.stringify(values.password)}</p>

        </form>
        

      
   
    </div>

    )
  }

export default Signup