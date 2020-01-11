import React from 'react'
import Room from '../components/Room'

const rooms = [{ puzzle: '2x2' }, { puzzle: '3x3' }]
const Home = () => {
  return (
    <>
      {rooms.map(room => (
        <Room key={room.puzzle} puzzle={room.puzzle} />
      ))}
    </>
  )
}

export default Home
