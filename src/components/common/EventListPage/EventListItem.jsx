// EventListItem.jsx
// git commit
// git commit

import { Link } from 'react-router-dom';

import './EventListItem.css'

const EventListItem = ({ data, type }) => {
  const titleText = `${data.movieName} ${
    type === 'movie' ? '시사회 이벤트' : '굿즈 이벤트'
  }`;
  return (
    <li className="EventListItem">
      <Link to={`/eventdetail/${data.id}`}>
      <p className='event-img'>
        <img src={data.imagePath[0]} alt={data.movieName} />
      </p>
        <p className="movieName">{titleText}</p>
      </Link>
    </li>
  );
};

export default EventListItem;
