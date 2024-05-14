import MissionVision from './MissionVision';
import styles from '../styles/about.module.css';
const TimelineItem = ({ year, heading, star }) => (
  <div className={styles.timelineItem}>

    <div className={styles.year}>
      <div className={styles.yearContent}>{year}</div>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.line} />
      <div className={styles.star}>{star}</div>
    </div>
    <div className={styles.content}>
      <h3 className={styles.heading} style={{ color: "black" }}>{heading}</h3>
    </div>
  </div>
);

const About = ({ }) => {
  return (
    <div>
      <div className={styles.about}>
      <div className={styles.title} style={{fontWeight: "bold"}}>History</div>
      <div className='text-center mb-5'>
        <h6>Sri Vishnu Educational Society has stood first among equals because of its quest and hard work to<br></br> develop as an educational society which stands apart.</h6>
      </div>
        <div className={styles.timeline}>
          <TimelineItem
            year="2001"
            heading="The first Inaugaral step ,Estabileshed Shri Vishnu Engineering College "
            star="☆"
          />
          <TimelineItem
            year="2008"
            heading="Expanding education from women to men , Established vishnu institute of technology"
            star="☆"
          />
          <TimelineItem
            year="2009"
            heading="Educating children became our major moto , established vishnu school"
            star="☆"
          />
          <TimelineItem
            year="2012"
            heading="Taking education Forward a new campus for womens in hyderabad got estalished BVRITH for women"
            star="☆"
          />
        </div>
      </div>
      <MissionVision />
    </div>
  );
};




export default About;