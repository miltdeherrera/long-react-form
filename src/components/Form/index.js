import { useEffect, useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [staff, setStaff] = useState('');
  const [bio, setBio] = useState('');
  const [notes, setNotes] = useState('');

  const onSubmit = () => {
    return null;
  }

  return (
    <div>
      <h2>Form element</h2>
      <form onSubmit={onSubmit}>
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
            <option value='' disabled>Select phone type:</option>
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
            onChange={e => setNotes(e.target.value)}
            value={notes}
          />
          <label
            htmlFor='notifications'
          >Check this box to receive emails about promotions.</label>
        </div>

        {/* NEED TO FIGURE OUT HOW TO CONNECT THESE WITH THE HOOK */}

        <div></div>

      </form>
    </div>
  )
}

export default Form;