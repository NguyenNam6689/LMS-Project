import { ValidateIsempty } from '@/common/utils/validate';

export const login = async (props) => {
  const [filedValidate, isError] = await ValidateIsempty(props);
  if (filedValidate) {
    return [filedValidate, isError];
  }
};
