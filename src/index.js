import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import './backpic.jpg'

function Hi() {
  return <div>
    <div className='name'>
      <h1>Daniyal Sheikh</h1>
    </div>
    <div className='headingp'>
      <h4 className='about'>.ABOUT</h4>
      <p>Developer who has passion for web and app technologies always ready to
        learn new technologies
        and to work on them my first priority is to give my best in
        terms of what i have and indulge you at every level .
      </p>
    </div>
    <div className='address'><h4>.ADDRESS</h4></div>
    <div className='paddress'><p>House NO L/209, Sector 48/E korangi.Karachi</p></div>
    
    <div className='connectp'><h4>.CONTACT ME</h4></div>

    <div className='doitflex'>

    <div className='linkdin'> <a href='https://www.linkedin.com/in/daniyal-sheikh-bb6b32260'> <button>linkdin</button></a></div>
    <div className='github'> <a href='https://github.com/DaniyalSheikh098' ><button>github</button></a></div>
    <div className='whatsapp'> <a href='https://wa.me/03168668373'><button>whatsapp</button></a></div>
    </div>

    <div className='black'>
      <div className='education'>
        <h2>EDUCATION</h2>
      </div>
      <div className='matric'>
        <h4>MATRICULATION</h4>
      </div>
      <div className='matricp'>
        <p>Dar-Ul-Madinah Boys Secondary International Schooling System (2019)</p>
        
      </div>
      <div className='inter'>
        <h4>INTERMEDIATE</h4>
      </div>
      <div className='interp'>
        <p>Gov.Islamia Science College (2021)</p>
      </div>
      <div className='webapp'>
        <h4>WEB-DEVELOPMENT</h4>
      </div>
      <div className='webappp'>
        <p>S.M.I.T Guslhan Campus (2023)</p>
      </div>
    </div>
    
      <div className='skills'>
        <h2>SKILLS</h2>
      </div>
      <div className='flexrow'>
      <div className='html'><button>HTML</button></div>
      <br></br>
      <div className='CSS'><button>CSS</button></div>
      <br></br>
      <div className='JAVA'><button>JAVASCRIPT</button></div>
      <br></br>
      <div className='REACT'><button>REACT</button></div>
      <br></br>
      <div className='JWT'><button>JWT</button></div>
      <br></br>
      <div className='FIREBASE'><button>FIREBASE</button></div>
      <br></br>
      <div className='PURCHASING'><button>PURCHASING</button></div>
      <br></br>
      <div className='DEALING'><button>DEALING</button></div>
      <br></br>
    </div>
    <div>
    <div className='exp'>
        <h2>EXPERIENCE</h2>
      </div>
      <div className='dataentry'>
      <p> 2 years of experience as a Data entry officer at (AB.FEEDS)</p>
      </div>
      <div className='purchase'>
      <p> 1 year experience as a purchasing manager at (AB.FEEDS)</p>
      </div>
      </div>
      <div className='lan'>
        <h2>LANGUAGES</h2>
      </div>
      <div className='zaban'>
        <div><button>ENGLISH</button></div>
        <div><button>URDU</button></div>
      </div>
      <br></br>
      <hr></hr>
      <center>
      <p className='end'>Developer @Daniyal_Sheikh</p>
      </center>
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));