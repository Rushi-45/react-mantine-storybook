import { TextInput, PasswordInput } from '@mantine/core';
import type { TextInputProps } from '@mantine/core';

export interface InputFieldProps extends Omit<TextInputProps, 'error'> {
  type?: string;
  helperText?: string;
  errorText?: string;
  required?: boolean;
}

const InputField = ({
  label,
  helperText,
  errorText,
  required,
  type = 'text',
  ...props
}: InputFieldProps) => {
  const sharedProps = {
    label,
    description: helperText,
    error: errorText,
    required,
    ...props,
  };

  if (type === 'password') {
    return <PasswordInput {...sharedProps} />;
  }

  return <TextInput type={type} {...sharedProps} />;
};

export default InputField;
