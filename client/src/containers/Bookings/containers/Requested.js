import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import { LinkButton, OutlinedButton } from '../../../components/UIComponents';
import { useTranslation } from 'react-i18next';

function Requested({
  t,
  bookingType,
  bookings,
  openModal,
  setModalContent,
  setActionType,
  setBookingId,
}) {
  const renderSection = (id) =>
    bookingType === 'sitting_jobs' ? (
      <RequestedJob
        openModal={openModal}
        setModalContent={setModalContent}
        setActionType={setActionType}
        setBookingId={() => setBookingId(id)}
      />
    ) : (
        <RequestedService />
      );

  return (
    <>
      {Array.isArray(bookings) &&
        bookings.length > 0 &&
        bookings.map((data, index) => (
          <ItemCard
            key={index} // data.id
            t={t}
            data={data}
            renderActionButtons={(id) => renderSection(id)}
            bookingType={bookingType}
            status='requested'
          />
        ))}

      {bookingType === 'sitting_jobs' && bookings.length === 0 && (
        <span>
          You have no requested sitting jobs at the moment. You will only receive sitting jobs
          requests when a cat sitter sends you want.
        </span>
      )}

      {bookingType === 'sitting_service' && bookings.length === 0 && (
        <span>
          You have no requested sitting service at the moment. Go to&nbsp;
          <LinkButton to="/find">Find a cat sitter</LinkButton> page to start looking for a cat sitter now!
        </span>
      )}
    </>
  );
}

export default Requested;

function RequestedJob({ openModal, setModalContent, setActionType, setBookingId }) {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <OutlinedButton
        backgroundColor="#FF5C4E"
        onClick={() => {
          openModal();
          setModalContent(t('bookings.decline_confirm'));
          setActionType('decline');
          setBookingId();
        }}
      >
        {t('bookings.decline')}
      </OutlinedButton>
      <OutlinedButton
        style={{ marginRight: 0 }}
        backgroundColor="#9ACD32"
        onClick={() => {
          openModal();
          setModalContent(t('bookings.accept_confirm'));
          setActionType('accept');
          setBookingId();
        }}
      >
        {t('bookings.accept')}
      </OutlinedButton>
    </div>
  );
}

function RequestedService() {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <span>Currently waiting on reply from cat sitter</span>
    </div>
  );
}
