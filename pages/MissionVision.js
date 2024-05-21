import { useState, useEffect, useRef } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const MissionVision = () => {
  const [showCoreValues, setShowCoreValues] = useState(false);
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

  const missionVisionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setShowCoreValues(true);
        }, 1000); 
        observer.disconnect(); 
      }
    });
    observer.observe(missionVisionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

 
  const toggleMission = () => {
    setIsMissionExpanded(!isMissionExpanded);
    setIsVisionExpanded(false);
  };

  const toggleVision = () => {
    setIsVisionExpanded(!isVisionExpanded);
    setIsMissionExpanded(false);
  };

  const coreValues = [
    'Student focus',
    'Strong ethics',
    'Striving for excellence',
    'Social development',
    'Respect for all'
  ];

  return (
    <div ref={missionVisionRef} className="container my-4 text-center"> 
      <div className="row" style={{backgroundColor:'#F0FFFF'}}>
        <div className="col-md-6 text-primary">
          <h3>CORE VALUES</h3>
          <ul className={`list-group${showCoreValues ? ' show' : ''}`}>
            {coreValues.map((value, index) => (
              <li
                key={index}
                className={`list-group-item animate${showCoreValues ? ' show' : ''}`}
                style={{ animationDelay: `${index * 0.5}s`,backgroundColor:'#F0FFFF', animationFillMode: 'forwards' }}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6 ">
          <h3 className='text-primary'>MISSION & VISION</h3>
          <div className="mission-vision-box">
            <div className="box" style={{ backgroundColor: isMissionExpanded ? 'blue' : 'inherit' ,color:isMissionExpanded?'white':'inherit'}} onClick={toggleMission}>
              <span  >Mission</span>
              <span className="arrow-icon">
              {isMissionExpanded ? (
               <FaArrowUp style={{ width: '20px', height: '20px' }} />
              ) : (
               <FaArrowDown style={{ width: '20px', height: '20px' }} />
  )}
</span>

            </div>
            {isMissionExpanded && (
              <div className="content">
                <p>To transform education through academic rigour,and outcome based teaching.To implement  relationship of cooperation between industry and academia.To develop and implement  relationship of cooperation between industry and academia.To prepare graduates to be lifelong learners with strong analytical and leadership skills.To develop global professionals and entrepreneurs with innovative desire to make a difference to the society.</p>
              </div>
            )}
            <div className="box"style={{ backgroundColor: isVisionExpanded ? 'blue' : 'inherit' ,color:isVisionExpanded?'white':'inherit'}} onClick={toggleVision}>
              <span>Vision</span>
              <span className="arrow-icon" >
                {isVisionExpanded ? (
                  <FaArrowUp style={{ width: '20px', height: '20px' }} />
                ) : (
                  <FaArrowDown style={{ width: '20px', height: '20px' }} />
                )}
              </span>
            </div>
            {isVisionExpanded && (
              <div className="content">
                <p>To be a premier academic institution, recognized internationally for its contribution to industry and society through excellence in teaching, learning, research, internationalization, entrepreneurship and leadership.Transforming life through excellence in education and research.</p>
              </div>
            )}
          </div>
        </div>
        <div className="row justify-content-center">
    <div className='col-md-6 text-center'>
        <img src="https://sastra.edu/images/sastra/MissionVission/mission2025.jpg" class="vision-img" alt="vision-img"/>
    </div>
</div>

</div>

      <style jsx>{`    
        .list-group {
          padding-left: 0;
          list-style-type: none; 
        }

        .list-group-item {
          font-family: 'Roboto', sans-serif;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          margin-bottom: 10px; /* Add margin between items */
          position: relative;
          border: none; 
        }

        .animate.show {
          opacity: 1;
          transform: translateX(0);
        }

        .mission-vision-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .expanded {
          background-color: blue; /* Set the background color to blue when expanded */
        }
        .box {
          display: flex;
          background-color:"white";
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .arrow-icon {
          width: 24px;
          height: 24px;
        }
        @media (max-width:576px){
          .vision-img{
            width:100%
          }
        }
        
      `}</style>
    </div>
  );
};

export default MissionVision;
