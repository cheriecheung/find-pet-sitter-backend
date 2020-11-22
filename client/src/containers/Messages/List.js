import React from 'react';
import styled from 'styled-components';
import { Image, ImageContainer } from '../../components/UIComponents'

const ListItemContainer = styled.div`
  display: flex;
  min-height: 65px;
  padding: 15px 20px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
`;

const TextContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

function List({ allChats }) {
  return allChats.map((item, index) => {
    const { id, name, image, message, isSelected } = item;

    return (
      <ListItemContainer style={{ background: isSelected ? '#f3f3f3' : '#fff' }} key={id}>
        <ImageContainer>
          <Image url="https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </ImageContainer>
        <TextContainer>
          <h6>{name}</h6>
          <span>{message}</span>
        </TextContainer>
      </ListItemContainer>
    );
  });
}

export default List;
