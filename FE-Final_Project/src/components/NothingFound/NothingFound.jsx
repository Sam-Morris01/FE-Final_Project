import './NothingFound.css';
import notFoundIcon from '../../assets/icons/not-found.svg';

function NothingFound() {
  return (
    <div className="nothing-found">
      <img src={notFoundIcon} alt="Nothing found" className="nothing-found__icon" />
      <h3 className="nothing-found__title">Nothing Found</h3>
      <p className="nothing-found__text">Sorry, but nothing matched your search terms.</p>
    </div>
  );
}

export default NothingFound; 