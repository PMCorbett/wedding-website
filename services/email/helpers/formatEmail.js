// @flow
import * as R from 'ramda';
import type { FormFieldType, FormPageDetailType } from 'types/form';

const htmlField = (
  showFileLinks: boolean,
  field: FormFieldType,
  formData: Object,
  host: string
) => {
  if (field.type === 'file') {
    return formData[field.name].map((file) => {
      if (showFileLinks) {
        return `<a href="${host}/${file.preview}">${file.name}</a><br />`;
      }

      return `${file.name}<br />`;
    });
  }

  if (R.is(Array, formData[field.name])) {
    return `<br />${R.join('<br />', formData[field.name])}`;
  }

  return formData[field.name];
};

const textField = (
  showFileLinks: boolean,
  field: FormFieldType,
  formData: Object,
  host: string
) => {
  if (field.type === 'file') {
    return formData[field.name].map((file) => {
      if (showFileLinks) {
        return `${host}/${file.preview}\n`;
      }

      return `${file.name}\n`;
    });
  }

  if (R.is(Array, formData[field.name])) {
    return `\n${R.join('\n', formData[field.name])}`;
  }

  return formData[field.name];
};

const getHTMLTitle = (groupTitle, fieldTitle, fieldPlaceholder) => {
  if (groupTitle === fieldTitle) {
    return '';
  }

  if (fieldTitle === '') {
    if (fieldPlaceholder) {
      return `<b>${fieldPlaceholder}</b>: `;
    }

    return '';
  }

  return `<b>${fieldTitle}</b>: `;
};

const getSummaries = R.compose(
  R.join('<br />'),
  R.pluck('summary')
);

const getAnonymised = R.reject(R.propEq('id', '/project_details/company'));

const formatHtmlFormData = ({
  formPages,
  showFileLinks,
  formData,
  host,
  anonymise,
}: {
  formPages: Array<FormPageDetailType>,
  showFileLinks: boolean,
  formData: Object,
  host: string,
  anonymise: boolean,
}) => {
  const filteredFormPages = anonymise ? getAnonymised(formPages) : formPages;

  return filteredFormPages
    .map((page) => {
      const title = `<h3>${page.title}</h3>`;

      if (!page.formGroups) {
        return '';
      }

      return (
        title +
        page.formGroups
          .map((group) => {
            const groupTitle = `<h4>${group.groupLabel}</h4>`;

            return (
              groupTitle +
              group.formFields
                .map((field) => {
                  if (formData[field.name]) {
                    return `${getHTMLTitle(
                      groupTitle,
                      field.title,
                      field.placeholder
                    )}${htmlField(showFileLinks, field, formData, host)}`;
                  }

                  if (field.name === 'nameCheckQuestions') {
                    return `
                      <p><b>${field.title}</b><br />
                      ${getSummaries(field.options)}
                      </p>
                      `;
                  }

                  return '';
                })
                .join('<br />')
            );
          })
          .join('<br />')
      );
    })
    .join('<hr />');
};

const textTitle = ({ title, placeholder }) => {
  if (title && title !== '') {
    return title;
  }

  if (placeholder && placeholder !== '') {
    return placeholder;
  }

  return '';
};

const formatTextFormData = ({
  formPages,
  showFileLinks,
  formData,
  host,
  anonymise,
}: {
  formPages: Array<FormPageDetailType>,
  showFileLinks: boolean,
  formData: Object,
  host: string,
  anonymise: boolean,
}) => {
  const filteredFormPages = anonymise ? getAnonymised(formPages) : formPages;

  return filteredFormPages
    .map((page) => {
      const title = `${page.title}\n\n`;

      if (!page.formGroups) {
        return '';
      }

      return (
        title +
        page.formGroups
          .map((group) => {
            const groupTitle = `${group.groupLabel}\n\n`;

            return (
              groupTitle +
              group.formFields
                .map(
                  (field) =>
                    formData[field.name] &&
                    `${textTitle(field)}: ${textField(
                      showFileLinks,
                      field,
                      formData,
                      host
                    )}`
                )
                .join('\n')
            );
          })
          .join('\n')
      );
    })
    .join('\n');
};

export const formatConfirmationHtml = (
  formPages: Array<FormPageDetailType>
) => ({ formData, host }: { formData: Object, host: string }) => `
  <p>Hello ${formData.requesterName}</p>
  <p>&nbsp;</p>
  <p>Your order has been submitted. Your order number is ${formData.uuid}.
  We will review and be in touch shortly.</p>
  <p>If you have any questions/queries please contact talkingheads@crowdlab.com and quote your project reference number.</p>
  <p>&nbsp;</p>
  <h2>Order Details</h2>
  ${formatHtmlFormData({
    formPages,
    showFileLinks: false,
    formData,
    host,
    anonymise: false,
  })}
  <p>&nbsp;</p>
  <p>Thank you!</p>
  <p>The Talking Heads Team</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Didn't expect to receive this email? Please <a href="mailto:talkingheads@crowdlab.com">let us know</a>.</p>
`;

export const formatConfirmationText = (
  formPages: Array<FormPageDetailType>
) => ({ formData, host }: { formData: Object, host: string }) => {
  const textFormData = formatTextFormData({
    formPages,
    showFileLinks: false,
    formData,
    host,
    anonymise: false,
  });

  return `
Hello ${formData.requesterName}\n\n
Your order has been submitted. Your order number is ${formData.uuid}.
We will review and be in touch shortly.\n
If you have any questions/queries please contact talkingheads@crowdlab.com and quote your project reference number.\n\n

Order Details

${textFormData}

Thank you!\n
The Talking Heads Team`;
};

export const formatStaffHtml = (formPages: Array<FormPageDetailType>) => ({
  formData,
  host,
}: {
  formData: Object,
  host: string,
}) => `
  <p>New order</p>
  <p>&nbsp;</p>
  <h2>Order Details</h2>
  ${formatHtmlFormData({
    formPages,
    showFileLinks: true,
    formData,
    host,
    anonymise: false,
  })}
`;

export const formatStaffText = (formPages: Array<FormPageDetailType>) => ({
  formData,
  host,
}: {
  formData: Object,
  host: string,
}) => `
  New order

  Order Details

  ${formatTextFormData({
    formPages,
    showFileLinks: true,
    formData,
    host,
    anonymise: false,
  })}`;

export const formatStaffAnonHtml = (formPages: Array<FormPageDetailType>) => ({
  formData,
  host,
}: {
  formData: Object,
  host: string,
}) => `
  <p>New order</p>
  <p>&nbsp;</p>
  <h2>Order Details</h2>
  ${formatHtmlFormData({
    formPages,
    showFileLinks: true,
    formData,
    host,
    anonymise: true,
  })}
`;

export const formatStaffAnonText = (formPages: Array<FormPageDetailType>) => ({
  formData,
  host,
}: {
  formData: Object,
  host: string,
}) => `
  New order

  Order Details

  ${formatTextFormData({
    formPages,
    showFileLinks: true,
    formData,
    host,
    anonymise: true,
  })}`;

export const formatCustomRecruitmentStaffHtml = (
  formPages: Array<FormPageDetailType>
) => ({ formData, host }: { formData: Object, host: string }) => `
  <p>New custom recruitment enquiry</p>
  <p>&nbsp;</p>
  <h2>Enquiry Details</h2>
  ${formatHtmlFormData({
    formPages,
    showFileLinks: true,
    formData,
    host,
    anonymise: false,
  })}
`;

export const formatCustomRecruitmentStaffText = (
  formPages: Array<FormPageDetailType>
) => ({ formData, host }: { formData: Object, host: string }) => `
  New custom recruitment enquiry

  Enquiry Details

  ${formatTextFormData({
    formPages,
    showFileLinks: true,
    formData,
    host,
    anonymise: false,
  })}`;

export const formatCustomRecruitmentConfirmationHtml = (
  formPages: Array<FormPageDetailType>
) => ({ formData, host }: { formData: Object, host: string }) => `
  <p>Hello ${formData.leadName}</p>
  <p>&nbsp;</p>
  <p>Your enquiry about custom recruitment options has been submitted.
  Your reference number is ${formData.uuid}.
  We will review and be in touch shortly.</p>
  <p>If you have any questions/queries please contact talkingheads@crowdlab.com and quote your project reference number.</p>
  <p>&nbsp;</p>
  <h2>Enquiry Details</h2>
  ${formatHtmlFormData({
    formPages,
    showFileLinks: false,
    formData,
    host,
    anonymise: false,
  })}
  <p>&nbsp;</p>
  <p>Thank you!</p>
  <p>The Talking Heads Team</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Didn't expect to receive this email? Please <a href="mailto:talkingheads@crowdlab.com">let us know</a>.</p>
`;

export const formatCustomRecruitmentConfirmationText = (
  formPages: Array<FormPageDetailType>
) => ({ formData, host }: { formData: Object, host: string }) => {
  const textFormData = formatTextFormData({
    formPages,
    showFileLinks: false,
    formData,
    host,
    anonymise: false,
  });

  return `
Hello ${formData.leadName}\n\n
Your enquiry about custom recruitment options has been submitted.
Your reference number is ${formData.uuid}.
We will review and be in touch shortly.\n
If you have any questions/queries please contact talkingheads@crowdlab.com and quote your project reference number.\n\n

Enquiry Details

${textFormData}

Thank you!\n
The Talking Heads Team`;
};
