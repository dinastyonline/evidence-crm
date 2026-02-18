import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from './button';

const meta = {
  title: 'UI/Button',
  component: Button as unknown as Meta<ButtonProps>['component'],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    asChild: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '↗',
    'aria-label': 'Icon button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  args: {
    ...Default.args,
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="default">Default Size</Button>
      <Button size="sm">Small Size</Button>
      <Button size="lg">Large Size</Button>
      <Button size="icon" aria-label="Icon button">
        ↗
      </Button>
    </div>
  ),
  args: {
    ...Default.args,
  },
  parameters: {
    controls: {
      disable: true,
    },
  },
};
