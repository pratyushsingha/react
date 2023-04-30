import React, { useState } from 'react'

function Usestate3() {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  const handleFirstName = (e) => {
    setName({
      ...name,
      firstName: e.target.value,
    })
  }

  const handleLastName = (e) => {
    setName(
      {
        ...name,
        lastName: e.target.value
      })
  }
  return (
    <>
      <input type="text" value={name.firstName} onChange={handleFirstName} />
      <input type="text" value={name.lastName} onChange={handleLastName} />
      <p>Your First Name:{name.firstName}</p>
      <p>Your Last Name:{name.lastName}</p>
      <p>{JSON.stringify(name)}</p>
    </>
  )
}

export default Usestate3
