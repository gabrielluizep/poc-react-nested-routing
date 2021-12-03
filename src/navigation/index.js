import React from 'react'
import {
  Navigate,
  // Route, Routes,
  useRoutes,
} from 'react-router'

import { Navbar } from 'components'
import { Profile, Welcome } from 'pages'

// New approach
const routes = [
  {
    path: '/poc-react-nested-routing',
    element: <Navigate replace to="/poc-react-nested-routing/home/welcome" />,
  },
  {
    path: '/poc-react-nested-routing/home',
    element: <Navbar />,
    children: [
      { path: 'welcome', element: <Welcome /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]

export const Routing = () => {
  // New approach
  const element = useRoutes(routes)

  return <>{element}</>

  // Old approach
  // return (
  //   <Routes>
  //     <Route path="/" element={<Navigate replace to="/home/welcome" />}></Route>
  //     <Route path="/home" element={<Navbar />}>
  //       <Route path="welcome" element={<Welcome />} />
  //       <Route path="profile" element={<Profile />} />
  //     </Route>
  //   </Routes>
  // );
}
