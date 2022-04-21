import React from 'react';
import calendarL from '../../Assets/images/icon-calendar.svg';
import planningL from '../../Assets/images/icon-planning.svg';
import remindersL from '../../Assets/images/icon-reminders.svg';
import todoL from '../../Assets/images/icon-todo.svg';
import closeL from '../../Assets/images/icon-close-menu.svg';
import arrowDown from '../../Assets/images/icon-arrow-down.svg';
import arrowUp from '../../Assets/images/icon-arrow-up.svg';
function Nav() {
    return (
      <nav className='navigation_block'>
        <div className='features_block'>
          <span className='features_drop'>Features</span>
          <img src={arrowDown} className='arrowDown' alt=''/>
          <img src={arrowUp} className='arrowUp' alt=''/>
            <div className='content_feature'>
              <img src={todoL} className='todo_img' alt=''/><p className='todo'>Todo list</p>
              <img src={calendarL} className='calendar_img'alt=''/><p className='calendar'>Calendar</p>
              <img src={remindersL} className='reminders_img'alt=''/><p className='reminders'>Reminders</p>
              <img src={planningL} className='planning_img'alt=''/><p className='planning'>Planning</p>
            </div>
        </div>
        <div className='company_block'>
          <span className='company_drop'>Features</span>
            <div className='content_company'>
              <p className='History'>History</p>
              <p className='OurTeam'>Our Team</p>
              <p className='Blog'>Blog</p> 
            </div>
        </div>
        <h2 className='careers'>Careers</h2>
        <h2 className='about'>About</h2>
        <img className='close' src={closeL} alt=''/>
      </nav>
    )
}

export default Nav;
