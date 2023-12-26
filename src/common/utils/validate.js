export const ValidateIsempty = async (props) => {
  let filedValidate = [];
  let isError = false;
  for (let i = 0; i < props.length; i++) {
    if (props[i] == '') {
      filedValidate.push({ notify: 'không được để trống', error: true });
      isError = true;
    } else {
      filedValidate.push({ notify: '', error: false });
    }
  }
  return [filedValidate, isError];
};
