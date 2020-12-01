import React from 'react';
import ItemCard from '../components/ItemCard';
import { LinkButton } from '../../../components/UIComponents';

function Completed({ t, bookingType, bookings }) {

  const renderActionButtons = (data, hasWrittenReview) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {hasWrittenReview ? (
        <h5>Show review here</h5>
      ) : (
          <>
            <LinkButton
              to={{
                pathname: `/writereivew/${data.id}`,
                state: { booking: { ...data, bookingType } }
              }}
            >
              {t('bookings.write_review')}
            </LinkButton>
            {/* <LinkButton to={`/writereivew/${bookingId}`} >
            { t('bookings.write_review')}
          </LinkButton> */}
          </>
        )
      }
    </div>
  );

  return (
    <>
      {Array.isArray(bookings) &&
        bookings.length > 0 &&
        bookings.map((data, index) => {
          // data.hasWrittenReview
          const hasWrittenReview = false;
          return (
            <ItemCard
              key={index} // data.id
              t={t}
              data={data}
              // renderActionButtons={() => renderActionButtons(hasWrittenReview, 123)}
              renderActionButtons={renderActionButtons}
              status="completed"
            />
          );
        })}

      {bookingType === 'sitting_jobs' && bookings.length === 0 && (
        <span>You have no completed sitting jobs at the moment.</span>
      )}

      {bookingType === 'sitting_service' && bookings.length === 0 && (
        <span>
          You have no completed sitting service at the moment. Go to&nbsp;
          <LinkButton to="/find">Find a cat sitter</LinkButton> page to start looking for a cat sitter now!
        </span>
      )}
    </>
  );
}

export default Completed;
