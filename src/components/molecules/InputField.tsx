import { TextInput, PasswordInput } from '@mantine/core';
import type { TextInputProps, PasswordInputProps } from '@mantine/core';

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
  if (type === 'password') {
    return (
      <PasswordInput
        label={label}
        description={helperText}
        error={errorText}
        required={required}
        visibilityToggleButtonProps={{ 'aria-label': 'Toggle password visibility' }}
        {...(props as Omit<PasswordInputProps, 'label' | 'description' | 'error' | 'required'>)}
      />
    );
  }

  return (
    <TextInput
      type={type}
      label={label}
      description={helperText}
      error={errorText}
      required={required}
      {...props}
    />
  );
};

export default InputField;
