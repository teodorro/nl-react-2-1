import PropTypes from "prop-types";
import '../css/main.css'

export default function Toolbar({ filters, selected, onSelectFilter }) {
  // console.log(selected);
  // console.log(onSelectFilter);
  return filters.map((filter) => (
    <span
      key={filter}
      className={getFilterItemCss(filter, selected)}
      onClick={onSelectFilter}
    >
      {filter}
    </span>
  ));
}

function getFilterItemCss(filter, selected) {
  let res = 'filter-item';
  if (filter === selected) {
    res = `${res} selected`
  }
  return res;
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};
