// @flow
// import { AttributeValue as attr } from 'dynamodb-data-types';
import type { Context, ProxyCallback } from 'flow-aws-lambda/index';
// import sendEmail from './helpers/sendEmail';
// import {
//   formatConfirmationText,
//   formatConfirmationHtml,
//   formatStaffText,
//   formatStaffHtml,
// } from './helpers/formatEmail';

export default (event: any, context: Context, callback: ProxyCallback) => {
  callback(null, { statusCode: 204, body: '' });
  // event.Records.forEach((record) => {
  //   if (record.eventName === 'INSERT') {
  //     if (record.dynamodb) {
  //       const formData = attr.unwrap(record.dynamodb.NewImage);

  //       const { origin } = formData;

  //       const staffText = formatStaffText(formPages)({
  //         formData,
  //         host: origin,
  //       });
  //       const staffHtml = formatStaffHtml(formPages)({
  //         formData,
  //         host: origin,
  //       });

  //       const confirmationText = formatConfirmationText(formPages)({
  //         formData,
  //         host: origin,
  //       });
  //       const confirmationHtml = formatConfirmationHtml(formPages)({
  //         formData,
  //         host: origin,
  //       });

  //       const staffEmailTo =
  //         formData.participantsAge === 'Other'
  //           ? ['talkingheads@crowdlab.com']
  //           : ['talkingheads@crowdlab.com', 'rapid@liveminds.co.uk'];

  //       const staffEmailSend = sendEmail({
  //         to: staffEmailTo,
  //         htmlBody: staffHtml,
  //         textBody: staffText,
  //         subject: `New Order: ${formData.uuid}`,
  //       });

  //       const confirmationEmailSend = sendEmail({
  //         to: [formData.requesterEmail],
  //         htmlBody: confirmationHtml,
  //         textBody: confirmationText,
  //         subject: `Order Number: ${formData.uuid}`,
  //       });

  //       Promise.all([staffEmailSend, confirmationEmailSend])
  //         .then(() => {
  //           callback(null, { statusCode: 204, body: '' });
  //         })
  //         .catch((err) => {
  //           callback(null, {
  //             statusCode: err.statusCode,
  //             body: JSON.stringify(err),
  //           });
  //         });
  //     }
  //   }
  // });
};
