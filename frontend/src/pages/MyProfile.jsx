import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      lin1: "57th cross, Richmond",
      lin2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} />

      {
        isEdit
          ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit
              ? <input type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit
              ? <p>
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, lin1: e.target.value } }))} value={userData.address.lin1} type='text' />
                <br />
                <input onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, lin2: e.target.value } }))} value={userData.address.lin2} type='text' />
              </p>
              : <p>
                {userData.address.lin1}
                <br />
                {userData.address.lin2}
              </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender: </p>
          {
            isEdit
              ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
              : <p>{userData.name}</p>
          }
        </div>
      </div>

    </div>
  )
}

export default MyProfile
