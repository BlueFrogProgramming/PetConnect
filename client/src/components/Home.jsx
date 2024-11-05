import React, { useEffect } from 'react';
import './Styles/HomeStyle.css';

function Home() {
    
    return(
        <>
            <div className="wrapper">
                <div className="reminders">
                    <h1>Reminders</h1>
                    <div className="reminder first">
                        <h2>Walk</h2>
                        <p className="time">9:00 am</p>
                        <h3>Take Halley on a walk</h3>
                    </div>
                    <div className="reminder middle">
                        <h2>Food</h2>
                        <p className="time">12:45 pm</p>
                        <h3>Feed Halley</h3>
                    </div>
                    <div className="reminder middle">
                        <h2>Vet</h2>
                        <p className="time">2:30 pm</p>
                        <h3>Take Halley to the vet</h3>
                    </div>
                    <div className="reminder last">
                        <h2>Walk</h2>
                        <p className="time">5:00 pm</p>
                        <h3>Take Halley on a walk</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;