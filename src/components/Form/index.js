import { useEffect, useState } from 'react';
import validator from 'validator';
import { phone as phoneValidator} from 'phone';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [notes, setNotes] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (name.length < 1) {
      errors.push('Please enter your name');
    }

    if (!validator.isEmail(email)) {
      errors.push('Please enter a valid email address');
    }

    if (!phoneValidator(phone).isValid) {
      errors.push('Please enter a valid phone number');
    }

    if (phone.length && phoneType == 'disabled') {
      errors.push('Please chose a valid phone type');
    }

    if (bio.length > 280) {
      errors.push('Bio must be less than 280 characters')
    }

    setValidationErrors(errors);
  }, [name, email, phone, phoneType, bio]);

  const onSubmit = (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length > 0) {
      return alert('Cannot submit due to errors');

    }

    const formFieldsObject = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      notes,
      submittedOn: new Date()
    };
    
    /* TO ADD: refresh/clear all fields */
    console.log(formFieldsObject);
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setStaff('');
    setBio('');
    setNotes('');
    setValidationErrors([]);
    setHasSubmitted(false);

  }

  return (
    <div>
      <h2>Form element</h2>
      <form onSubmit={onSubmit}>
        {validationErrors.length > 0
          && hasSubmitted
          && (
            <div>
              Errors when attempting to submit form:
              <ul>
                {
                  validationErrors.map(error =>
                    <li key={error}>{error}</li>
                  )}
              </ul>
            </div>
          )}
        <div>
          <label
            htmlFor='name'
          >Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name} />
        </div>
        <div>
          <label
            htmlFor='email'
          >Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email} />
        </div>
        <div>
          <label
            htmlFor='phone'
          >Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone} />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='disabled'>Select phone type:</option>
            <option value='home'>Home</option>
            <option value='work'>Work</option>
            <option value='mobile'>Mobile</option>
          </select>
        </div>
        <div>

          {/* NEED TO FIGURE OUT HOW TO CONNECT THESE WITH THE HOOK */}

          <label
            htmlFor='staff'>Select role:</label>
          <input
            type='radio'
            id='teacher'
            name='staff'
            onChange={e => setStaff(e.target.value)}
            value={staff} />
          <label
            htmlFor='teacher'>Teacher</label>
          <input
            type='radio'
            id='student'
            name='staff'
            onChange={e => setStaff(e.target.value)}
            value={staff} />
          <label
            htmlFor='student'>Student</label>

          {/* NEED TO FIGURE OUT HOW TO CONNECT THESE WITH THE HOOK */}


        </div>
        <div>

          <label
            htmlFor='bio'
          >Bio</label>

          <textarea
            id='bio'
            name='bio'
            onChange={e => setBio(e.target.value)}
            value={bio}
          />
        </div>
        <div>

          {/* NEED TO FIGURE OUT HOW TO CONNECT THESE WITH THE HOOK */}


          <input
            type='checkbox'
            id='notifications'
            name='notifications'
            onClick={e => setNotes(this.state.active)}
            value={notes}
          />
          <label
            htmlFor='notifications'
          >Check this box to receive emails about promotions.</label>
        </div>

        {/* NEED TO FIGURE OUT HOW TO CONNECT THESE WITH THE HOOK */}
        
        <button>Submit</button>

        <div></div>

      </form>
    </div>
  )
}

export default Form;


// To do:
// Disable the phoneType dropdown menu if the Phone field is empty
// Add a placeholder to show the proper format for inputting a phone number
// On submit, make sure the phoneType is blank in your JSON object if no phone is given (even if there is a phoneType selected)
// Highlight fields that fail validation in red
// Associate each error message with its field on the form instead of printing them all at the top
// Render errors without shifting the form fields up or down
// Hint: Reserve space for the error messages even when they are not present
// After a user has submitted a form with errors, validate the updates on keystroke instead of waiting for submit so the errors clear as soon as they are fixed
// If you have accomplished all of the above, your Form component has likely grown quite large. It also probably has some repeated lines of code. Remember that shorter, more modular code that does not repeat itself is easier to understand and maintain. With that in mind, refactor your code to clean up your Form component! In particular, look to see if any code blocks could be refactored into their own React components.
// Suggestion: Consider rendering each input type (text, select, textarea, radio, checkbox) as a React component. To help keep your code manageable and modularized, define each new component in its own file.
// Try adding the validations to their respective input components. (You will need to create separate validation functions for each field.)
// Add CSS styling
