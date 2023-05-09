import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  InputFilter,
  FilterWrapper,
  ButtonFilter,
  Cross,
} from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onFilterReset: PropTypes.func.isRequired,
  };

  render() {
    const { value, onFilterChange, onFilterReset } = this.props;

    return (
      <FilterWrapper>
        <InputFilter
          type="text"
          name="filter"
          value={value}
          onChange={onFilterChange}
          placeholder="Search contact's name"
        />
        <ButtonFilter type="button" onClick={onFilterReset}>
          <Cross></Cross>
        </ButtonFilter>
      </FilterWrapper>
    );
  }
}

export default Filter;
