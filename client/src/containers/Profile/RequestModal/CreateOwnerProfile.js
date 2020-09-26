import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function CreateOwnerProfile({ t }) {
  return (
    <div style={{ margin: '50px 0' }}>
      <h6>You can only send a request to a cat sitter when you have a cat owner profile.</h6>
      <br />
      <h6>
        To start creating your cat owner profile, go to the
        <a href={`/account/${cookies.get('shortId')}`} target="_blank">
          &nbsp;account page
        </a>
        , and click on the 'Cat owner profile' tab.
      </h6>
    </div>
  );
}

export default CreateOwnerProfile;