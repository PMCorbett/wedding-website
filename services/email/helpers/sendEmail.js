// @flow
import AWS from 'aws-sdk';

type SendArgs = {
  to: Array<string>,
  htmlBody: string,
  textBody: string,
  subject: string,
};

const sendEmail = ({ to, htmlBody, textBody, subject }: SendArgs) => {
  const params = {
    Destination: {
      ToAddresses: to,
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: htmlBody,
        },
        Text: {
          Charset: 'UTF-8',
          Data: textBody,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
    Source: 'rsvp@patrickandgrace.com',
  };

  const ses = new AWS.SES({ region: 'eu-west-1' });

  return ses.sendEmail(params).promise();
};

export default sendEmail;
