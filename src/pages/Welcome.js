import React from 'react'

export const Welcome = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
      <h1
        style={{
          gridColumn: '4 / 10',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Welcome user!
      </h1>
    </div>
  )
}
