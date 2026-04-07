import { Checkbox as MantineCheckbox } from '@mantine/core';
import type { CheckboxProps as MantineCheckboxProps } from '@mantine/core';

export type CheckboxProps = MantineCheckboxProps;

const Checkbox = (props: CheckboxProps) => <MantineCheckbox {...props} />;

export default Checkbox;
