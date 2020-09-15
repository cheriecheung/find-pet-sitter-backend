import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScreenWidthListener from '../../components/General/ScreenWidthListener';
import { sitterBookings } from '../../constants';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { decline } from '../../_actions/bookingActions';
import { SittingJobs, SittingService } from './Types';
import { Cancelled, Completed, Confirmed, Requested } from './Status';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Container = styled.div`
  text-align: left;
  margin: 0px 5%;
`;

const defaultKeyBookingType = 'sitting_jobs';
const defaultKeyBookingStatus = 'request';

function BookingTabs() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { screenWidth } = ScreenWidthListener();
  const [tabPosition, setTabPosition] = useState('');

  const [bookingTypeActiveKey, setBookingTypeActiveKey] = useState(defaultKeyBookingType);
  const [bookingStatusActiveKey, setBookingStatusActiveKey] = useState(defaultKeyBookingStatus);
  const [bookings, setBookings] = useState({});

  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const [confirmActionType, setConfirmActionType] = useState('');
  const [bookingId, setBookingId] = useState('');

  const { request = [], confirmed = [], completed = [], cancelled = [] } = bookings;

  const bookingStatusTabs = [
    {
      key: 'requested',
      tab: `${t('bookings.requested')} (${request.length})`,
      content: (
        <Requested
          bookingType={bookingTypeActiveKey}
          bookingStatusActiveKey={bookingStatusActiveKey}
          bookings={request}
          openModal={() => setModalVisible(true)}
          setModalContent={(content) => setModalContent(content)}
          setConfirmActionType={(type) => setConfirmActionType(type)}
          setBookingId={(id) => setBookingId(id)}
          t={t}
        />
      ),
    },
    {
      key: 'confirmed',
      tab: `${t('bookings.confirmed')} (${confirmed.length})`,
      content: (
        <Confirmed
          bookingType={bookingTypeActiveKey}
          bookingStatusActiveKey={bookingStatusActiveKey}
          bookings={confirmed}
          openModal={() => setModalVisible(true)}
          setModalContent={(content) => setModalContent(content)}
          t={t}
        />
      ),
    },
    {
      key: 'completed',
      tab: `${t('bookings.completed')} (${completed.length})`,
      content: (
        <Completed
          bookingType={bookingTypeActiveKey}
          bookingStatusActiveKey={bookingStatusActiveKey}
          bookings={completed}
          t={t}
        />
      ),
    },
    {
      key: 'reviews',
      tab: `${t('bookings.cancelled')} (${cancelled.length})`,
      content: (
        <Cancelled
          bookingType={bookingTypeActiveKey}
          bookingStatusActiveKey={bookingStatusActiveKey}
          bookings={cancelled}
        />
      ),
    },
  ];

  const changeBookingStatusTab = (activeKey) => {
    setBookingStatusActiveKey(activeKey);
  };

  const bookingTabs = [
    {
      key: 'sitting_jobs',
      tab: t('bookings.sitting_jobs'),
      content: (
        <SittingJobs
          bookingStatusTabs={bookingStatusTabs}
          changeBookingStatusTab={changeBookingStatusTab}
        />
      ),
    },
    {
      key: 'sitting_service',
      tab: t('bookings.sitting_service'),
      content: (
        <SittingService
          bookingStatusTabs={bookingStatusTabs}
          changeBookingStatusTab={changeBookingStatusTab}
        />
      ),
    },
  ];

  // useEffect(() => {
  //   if (bookingTypeActiveKey === 'sitting_jobs') {
  //     setBookings(sitterBookings);
  //   } else {
  //     const ownerBookings = {
  //       request: [{}, {}, {}],
  //       confirmed: [{}],
  //       completed: [{}],
  //       cancelled: [{}],
  //     };

  //     setBookings(ownerBookings);
  //   }
  // }, [bookingTypeActiveKey]);

  useEffect(() => {
    if (screenWidth <= 930) {
      setTabPosition('top');
    } else {
      setTabPosition('left');
    }
  }, [screenWidth]);

  const changeBookingTypeTab = (activeKey) => {
    setBookingTypeActiveKey(activeKey);
  };

  const performBookingAction = () => {
    switch (confirmActionType) {
      case 'decline':
        dispatch(decline(bookingId));
      default:
        break;
    }
  };

  useEffect(() => {
    console.log({ confirmActionType });
  }, [confirmActionType]);

  return (
    <div style={{ display: 'flex', marginTop: 10 }}>
      <Tabs
        defaultActiveKey={defaultKeyBookingType}
        onChange={changeBookingTypeTab}
        tabPosition={tabPosition}
        className="vertical-tabs"
      >
        {bookingTabs.map(({ key, tab, content }) => (
          <TabPane tab={tab} key={key}>
            {content}
          </TabPane>
        ))}
      </Tabs>

      <Modal
        //  title=""
        visible={modalVisible}
        onOk={() => performBookingAction()}
        onCancel={() => setModalVisible(false)}
        maskClosable={false}
      >
        <br />
        {modalContent}
      </Modal>
    </div>
  );
}
export default BookingTabs;
