import { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const MissionVision = () => {
  const [showCoreValues, setShowCoreValues] = useState(false);
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCoreValues(true);
    }, 1000); // Set initial delay for showing core values
    return () => clearTimeout(timeout);
  }, []);

  const toggleMission = () => {
    setIsMissionExpanded(!isMissionExpanded);
    // Close Vision box when Mission is clicked
    setIsVisionExpanded(false);
  };

  const toggleVision = () => {
    setIsVisionExpanded(!isVisionExpanded);
    // Close Mission box when Vision is clicked
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
    <div className="container my-4 text-center"> {/* Center both sections */}
      <div className="row">
        <div className="col-md-6">
          <h3>CORE VALUES</h3>
          <ul className={`list-group${showCoreValues ? ' show' : ''}`}>
            {coreValues.map((value, index) => (
              <li
                key={index}
                className={`list-group-item animate${showCoreValues ? ' show' : ''}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h3>MISSION & VISION</h3>
          <div className="mission-vision-box">
            <div className="box" onClick={toggleMission}>
              <span>Mission</span>
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
            <div className="box" onClick={toggleVision}>
              <span>Vision</span>
              <span className="arrow-icon">
                {isVisionExpanded ? (
                  <FaArrowUp style={{ width: '20px', height: '20px' }} />
                ) : (
                  <FaArrowDown style={{ width: '20px', height: '20px' }} />
                )}
              </span>
            </div>
            {isVisionExpanded && (
              <div className="content">
                {/* Vision content */}
                <p>To be a premier academic institution, recognized internationally for its contribution to industry and society through excellence in teaching, learning, research, internationalization, entrepreneurship and leadership.Transforming life through excellence in education and research.</p>
              </div>
            )}
          </div>
        </div>
        </div>
        <div className='mt-5'>
            <img src="https://sastra.edu/images/sastra/MissionVission/mission2025.jpg"/>
        </div>
      <style jsx>{`
        .list-group {
          padding-left: 0;
          list-style-type: none; /* Remove bullet points */
        }

        .list-group-item {
          font-family: 'Roboto', sans-serif;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          margin-bottom: 10px; /* Add margin between items */
          position: relative;
          border: none; /* Remove border */
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

        .box {
          display: flex;
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
      `}</style>
    </div>
  );
};

export default MissionVision;
