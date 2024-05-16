// LeftSidebar.js
import Link from 'next/link';

const LeftSidebar = ({ onHide }) => {
  return (
    <div className="left-sidebar">
      <ul>
        <li>
          <Link href="/hyderabad">Hyderabad</Link>
        </li>
        <li>
          <Link href="/bhimavaram">Bhimavaram</Link>
        </li>
      </ul>
      <button onClick={onHide}>Close</button>
    </div>
  );
};

export default LeftSidebar;
