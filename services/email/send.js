// @flow
// import { AttributeValue as attr } from 'dynamodb-data-types';
import type { Context, ProxyCallback } from 'flow-aws-lambda/index';
import sendEmail from './helpers/sendEmail';
// import {
//   formatConfirmationText,
//   formatConfirmationHtml,
//   formatStaffText,
//   formatStaffHtml,
// } from './helpers/formatEmail';

export default (event: any, context: Context, callback: ProxyCallback) => {
  const {
    attendees,
    accepts,
    number,
    dietaryRequirements,
    declineReason,
  } = JSON.parse(event.body);

  console.log('event', event);
  console.log(attendees, accepts, number, dietaryRequirements, declineReason);

  const to = ['patrickmacorbett@gmail.com'];

  if (accepts === 'decline') {
    const declineText = `
    <p><b>${attendees}</b> have declined attending.</p>
    <p>They gave this reason:<p>
    <p>${declineReason}</p>`;

    sendEmail({
      to,
      htmlBody: declineText,
      textBody: declineText,
      subject: 'RSVP: Decline to attend',
    })
      .then(() => {
        callback(null, { statusCode: 204, body: '' });
      })
      .catch((err) => {
        callback(err);
      });

    return;
  }

  if (accepts === 'accept') {
    const acceptText = `
    <p><b>${attendees}</b> would like to attend</p>
    <p>There will be ${number} of them.<p>
    <p>Dietary Requiremets: ${dietaryRequirements}</p>`;

    sendEmail({
      to,
      htmlBody: acceptText,
      textBody: acceptText,
      subject: 'RSVP: Will be attending',
    })
      .then(() => {
        callback(null, { statusCode: 204, body: '' });
      })
      .catch((err) => {
        callback(err);
      });

    return;
  }

  callback(new Error('[400] Bad Request'));
};
