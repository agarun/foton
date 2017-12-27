import React from 'react';
import InfoSVG from '../svg/info';

const SessionError = ({ sessionErrors }) => (
  <section className="session-error">
    <InfoSVG />
    <p>
      {
        Object
          .keys(sessionErrors)
          .map(errorType => sessionErrors[errorType].join('\n'))
          .join('\n')
      }
    </p>
  </section>
);

export default SessionError;
