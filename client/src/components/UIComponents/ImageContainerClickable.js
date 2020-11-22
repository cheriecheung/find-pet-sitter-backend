import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageContainerClickable = styled(Link)`
  display: block;
  width: 70px;
  height: 70px;
  background: pink;
  overflow: hidden;
  border-radius: 10px;
`;

export default ImageContainerClickable