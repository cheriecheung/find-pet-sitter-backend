import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'reactstrap';
import { SectionContainer } from '../../components/FormComponents';
import styled from 'styled-components';
import { Pagination } from 'antd';

// const cardHeight = 160;

const ResultContainer = styled.div`
  text-align: left;
  margin-bottom: 25px;
  border-radius: 10px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 1);
  overflow: hidden;
  display: flex;
  padding: 20px;
`;

let resultsFound = [
  { title: 'Card title1', value: 'Person 1' },
  { title: 'Card title2', value: 'Person 2' },
  { title: 'Card title3', value: 'Person 3' },
  { title: 'Card title4', value: 'Person 4' },
  { title: 'Card title5', value: 'Person 5' },
  { title: 'Card title6', value: 'Person 6' },
  { title: 'Card title7', value: 'Person 7' },
  { title: 'Card title8', value: 'Person 8' },
  { title: 'Card title9', value: 'Person 9' },
  { title: 'Card title10', value: 'Person 10' },
  { title: 'Card title11', value: 'Person 11' },
  { title: 'Card title12', value: 'Person 12' },
  { title: 'Card title13', value: 'Person 13' },
  { title: 'Card title14', value: 'Person 14' },
  { title: 'Card title15', value: 'Person 15' },
];

const fiveStarDisplay = (number) => {
  return (
    <>
      <i className="fas fa-star icon-sort-review" />
      <i className="fas fa-star icon-sort-review" />
      <i className="fas fa-star icon-sort-review" />
      <i className="fas fa-star icon-sort-review" />
      <i className="fas fa-star icon-sort-review" />
      <span className="ml-1">
        {number} {number === 1 ? 'Review' : 'Reviews'}
      </span>
    </>
  );
};

function Result() {
  const resultsEachPage = 10;

  const { t, i18n } = useTranslation();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(resultsEachPage);

  const totalResults = resultsFound.length;

  const handleChange = (pageNum) => {
    if (pageNum <= 1) {
      setMinValue(0);
      setMaxValue(resultsEachPage);
    } else {
      setMinValue(maxValue);
      setMaxValue(pageNum * resultsEachPage);
    }
  };

  return (
    <div>
      <p style={{ textAlign: 'left', marginBottom: 20 }}>
        Showing {resultsFound.length} cat sitters
      </p>
      {resultsFound &&
        resultsFound.length > 0 &&
        resultsFound.slice(minValue, maxValue).map((item, index) => {
          const { profilePic, name, reviews, distance, price = 10, aboutMe } = item;

          return (
            <ResultContainer>
              <div
                style={{
                  //maxHeight: 150,
                  flexBasis: '26%',
                  margin: '0 15px 0 -20px',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="pic"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div
                style={{
                  flexBasis: '75%',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <h5>{item.value}</h5>
                  <div>
                    <div>
                      <i className="fas fa-map-marker-alt icon-sort-distance" />
                      <span>{'<'} 500m</span>
                    </div>
                    <div>
                      <i className="fas fa-euro-sign icon-sort-price" />
                      <span>{price} / booking</span>
                    </div>
                  </div>
                </div>
                {/* <div className="mb-2">
                  <span className="mr-2">Verified by: </span>
                  <i className="fas fa-address-card icon-verified" />
                  <i className="fas fa-home icon-verified" />
                  <i className="fas fa-phone icon-verified" />
                  <i className="fab fa-facebook-square icon-verified" />
                </div> */}
                <Row>
                  <Col md={4} style={{ minWidth: 200 }} className="mb-2">
                    {fiveStarDisplay(12)}
                  </Col>
                </Row>
                <Row>
                  <Col md={4} className="mb-2" style={{ minWidth: 200, color: '#00C68E' }}>
                    <i class="far fa-calendar-alt mr-2" />
                    <span>10 Completed bookings</span>
                  </Col>
                  <Col className="mb-2" style={{ minWidth: 200, color: '#00C68E' }}>
                    <i className="fas fa-redo-alt mr-2" />
                    <span>2 Repeated customer(s)</span>
                  </Col>
                </Row>
                <hr style={{ margin: '10px 0' }} />
                <p style={{ margin: 0, padding: 0 }}>
                  My name is Marieke. I have had a cat since I was 11 years old and I have been in
                  love with cats ever since then...
                </p>
                <a href="#" style={{ float: 'right' }}>
                  View profile
                </a>
              </div>
            </ResultContainer>
          );
        })}
      <Pagination
        defaultCurrent={1}
        defaultPageSize={resultsEachPage}
        onChange={handleChange}
        total={totalResults}
      />
    </div>
  );
}

export default Result;