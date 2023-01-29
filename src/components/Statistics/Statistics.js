import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {

    return (

      <section>

        {title && <h2 className={title}>{title}</h2>}
  
        <ul className={statList}>
          {stats.map(stat => (
            <li
              key={stat.id}
              className={item}
            >
              <span className={labek}>{stat.label}</span>
              <span className={percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
        
      </section>
    );
  };

 Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };