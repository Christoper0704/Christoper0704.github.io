import React from 'react';
import '../Styles/Project.css';

const Card = (props) => (
    <div className="card-project">
      <a href={ props.projectUrl }>
        <img src={require(`../Images/${props.imgUrl}`)} 
          alt={ props.alt || 'Image' } />
        <div className="card-content">
          <h2>{ props.title }</h2>
          <p>{ props.content }</p>
          <br />
          <p>Click to See Details</p>
        </div>
      </a>
    </div>
  );

  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            content={ card.content }
            imgUrl={ card.imgUrl }
            alt = { card.url }
            projectUrl = { card.projectUrl } />
        ))
      }
    </div>
  );

const Project = () => {
    
    const cardsData = [
        {id: 1, title: 'E-Eyes', content: 'Online Attendance System Based on Face Recognition', imgUrl: 'e-eyes.png', alt: 'E-Eyes', projectUrl: 'https://github.com/felixfilipi/E-eyes.git'},
        {id: 2, title: 'Hydrovest', content: 'Automated Aquaponics Monitoring System', imgUrl: 'Hydrovest.png', alt: 'Hydrovest', projectUrl: 'https://github.com/Christoper0704/Hydrovest.git'},
        {id: 3, title: 'E-Monteer', content: 'Cross Platform Online Mechanic Application', imgUrl: 'emonteer.png', alt: 'E-Monteer', projectUrl: 'https://github.com/felixfilipi/E-Monteer.git'},
        {id: 4, title: 'MotivSong', content: 'Motivasion Song Collections', imgUrl: 'motivsong.jpg', alt: 'MotivSong', projectUrl: 'https://github.com/Christoper0704/MotivationSong.git'}
    ]

    return (
        <div id='project' className='project-container'>
            <div className='container'>
                <h2 style={{textAlign: 'center'}}>
                    Project
                </h2>
                <CardContainer cards={cardsData} />
            </div>
        </div>
    );
}

export default Project;