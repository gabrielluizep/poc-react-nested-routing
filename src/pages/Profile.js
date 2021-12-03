import React from 'react'

export const Profile = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
      <h1
        style={{
          gridColumn: '4 / 10',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        This is your profile!
      </h1>
    </div>
  )
}
