const saveForm = (formData) => {
  const currentFormData = JSON.parse(window.localStorage.getItem('formData'));

  window.localStorage.setItem(
    'formData',
    JSON.stringify({ ...currentFormData, ...formData })
  );
};

export default saveForm;
