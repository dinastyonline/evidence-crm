import type { Meta, StoryObj } from '@storybook/nextjs-vite';

type WelcomeProps = {
  title: string;
  description: string;
};

function Welcome({ title, description }: WelcomeProps) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 text-foreground">
      <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

const meta: Meta<typeof Welcome> = {
  title: 'Setup/Welcome',
  component: Welcome,
  tags: ['autodocs'],
  args: {
    title: 'Storybook v10 is ready',
    description: 'Stories are loading correctly from the Storybook workspace.',
  },
};

export default meta;

type Story = StoryObj<typeof Welcome>;

export const Default: Story = {};
