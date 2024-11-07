import React, { useEffect } from 'react';
import './Styles/MenuStyle.css';
import 'boxicons';

function Menu({ onNavigate }) {
  useEffect(() => {
    const list = document.querySelectorAll('.list');

    function activeLink(event) {
      list.forEach((item) => item.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }

    list.forEach((item) => item.addEventListener('click', activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener('click', activeLink));
    };
  }, []);

  return (
    <div>
      <div className="menu">
        <ul>
          <li className="list active">
            <a href="#" onClick={() => onNavigate('home')}>
              <span className="icon">
                <box-icon type="solid" name="home" size="md"></box-icon>
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={() => onNavigate('socials')}>
              <span className="icon">
                <box-icon type='solid' name='group' size='md'></box-icon>
              </span>
              <span className="text">Socials</span>
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={() => onNavigate('calendar')}>
              <span className="icon">
                <box-icon name="calendar" size="md"></box-icon>
              </span>
              <span className="text">Calendar</span>
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={() => onNavigate('alerts')}>
              <span className="icon">
                <box-icon name="bell" type="solid" size="md"></box-icon>
              </span>
              <span className="text">Alerts</span>
            </a>
          </li>
          <li className="list">
            <a href="#" onClick={() => onNavigate('profile')}>
              <span className="icon">
                <box-icon name="user" size="md" type="solid"></box-icon>
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default Menu;