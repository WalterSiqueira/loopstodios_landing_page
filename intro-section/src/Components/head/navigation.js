import React, {useRef} from 'react';
import calendarL from '../../Assets/images/icon-calendar.svg';
import planningL from '../../Assets/images/icon-planning.svg';
import remindersL from '../../Assets/images/icon-reminders.svg';
import todoL from '../../Assets/images/icon-todo.svg';
import closeL from '../../Assets/images/icon-close-menu.svg';
import arrowDown from '../../Assets/images/icon-arrow-down.svg';
import arrowUp from '../../Assets/images/icon-arrow-up.svg';
let show = false;
function Nav() {
    const ref = useRef();
    const reftwo = useRef();
    const arrowU = useRef();
    const arrowD = useRef();
    const arrowUtwo = useRef();
    const arrowDtwo = useRef();
    function showhide() {  
      if (show === false) {
        ref.current.style.display = 'grid'; 
        arrowD.current.style.display = 'none';
        arrowU.current.style.display = 'block';
        show = true;
        console.log('active');
      } else if (show === true) {
        ref.current.style.display =  'none';
        arrowD.current.style.display = 'block';
        arrowU.current.style.display = 'none';
        show = false; 
        console.log('inactive');
      }
    }
    function showhidetwo() {
      if (show === false) {
        reftwo.current.style.display = 'grid'; 
        arrowDtwo.current.style.display = 'none';
        arrowUtwo.current.style.display = 'block';
        show = true;
        console.log('active');
      } else if (show === true) {
        reftwo.current.style.display =  'none';
        arrowDtwo.current.style.display = 'block';
        arrowUtwo.current.style.display = 'none';
        show = false; 
        console.log('inactive');
      }
    }
    return (
      <nav className='navigation_block'>
        <div className='features_block'>
          <span className='features_drop'  onClick={showhide}  id='feature_drop'>Features</span>
          <img src={arrowDown} className='arrowDown' ref={arrowD} id='arrowDown' alt=''/>
          <img src={arrowUp} className='arrowUp' ref={arrowU} id='arrowUp' alt=''/>
            <div className='content_feature' ref={ref} id='feature_content'>
              <img src={todoL} className='todo_img' alt=''/><p className='todo'>Todo list</p>
              <img src={calendarL} className='calendar_img'alt=''/><p className='calendar'>Calendar</p>
              <img src={remindersL} className='reminders_img'alt=''/><p className='reminders'>Reminders</p>
              <img src={planningL} className='planning_img'alt=''/><p className='planning'>Planning</p>
            </div>
        </div>
        <div className='company_block'>
          <span className='company_drop' onClick={showhidetwo}  id='company_drop'>Company</span>
          <img src={arrowDown} className='arrowDown' ref={arrowDtwo} id='arrowDownC' alt=''/>
          <img src={arrowUp} className='arrowUp' ref={arrowUtwo} id='arrowUpC' alt=''/>
            <div className='content_company' ref={reftwo} id='company_content'>
              <p className='History'>History</p>
              <p className='OurTeam'>Our Team</p>
              <p className='Blog'>Blog</p> 
            </div>
        </div>
        <h2 className='careers'>Careers</h2>
        <h2 className='about'>About</h2>
        <button className='loginbtn' id='loginbtn'>Login</button>
        <button className='registerbtn' id='registerbtn'>Register</button>
        <img className='close' id='close' src={closeL} alt=''/>
      </nav>
    )
}

export default Nav;
