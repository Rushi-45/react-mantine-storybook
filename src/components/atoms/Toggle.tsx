import { Switch } from '@mantine/core';
import type { SwitchProps } from '@mantine/core';

export type ToggleProps = SwitchProps;

const Toggle = (props: ToggleProps) => <Switch {...props} />;

export default Toggle;
