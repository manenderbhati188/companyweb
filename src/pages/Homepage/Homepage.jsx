import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Cards from '../../component/card/Cards'
import Content from '../../component/content/Content'
// import Contact from '../../component/contact/Contact'
import Choose from '../../component/choose/Choose'
import Banner from '../../component/Banner/Banner'
const HomePage = () => {
  return (
    <div className='nav_bar'>
        <Banner/>
        <Cards/>
        <Content/>
        <Choose/>
        {/* <Contact/> */}
    </div>
  )
}

export default HomePage