import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubTabBarItem = styled.button`
  border: ${({ isSelected }) => isSelected ? '2px solid #ffa195' : 'none'};  font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'normal'};
  color: ${({ isSelected }) => isSelected ? '#ffa195' : '#949292'};
  border-radius: 10px;
  outline: none !important;
  background: none;
  padding: 3px 10px 4px 10px;
  margin: 0 5px;
  white-space: nowrap;

  :first-child {
    margin-left: 15px;
  }

  :last-child{
    margin-right: 15px;
  }
`

export default SubTabBarItem;

SubTabBarItem.propTypes = {
  isSelected: PropTypes.bool
};

SubTabBarItem.defaultProps = {
  isSelected: false
};