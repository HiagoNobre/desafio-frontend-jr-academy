import type { Meta, StoryObj } from '@storybook/react';

import data from '../../data';
import { MultiselectInput } from './MultiselectInput';

const meta = {
  title: 'App/MultiselectInput',
  component: MultiselectInput,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: `Título do input padrão é Multiselect mas pode
      ser definido um de acordo com a necessidade`,
      value: undefined,
      defaultValue: 'Multiselect',
    },
    items: {
      value: [{
        id: {
          value: 1,
        },
        selected: {
          value: false,
        },
        content: {
          value: 'Conteúdo'
        }
      }],
      description: `id deve ser único, selected define se vai estar
      marcado e content é o conteúdo da lista pode ser string ou número`,
      defaultValue: [],
    },
    focus: {
      description: `Define se o input inicia no modo selecionado`,
      value: false,
      defaultValue: false,
    },
    setItems: {
      description: `Estado para atualizar os valores de items`,
      defaultValue: 'undefined',
    },
    setIsOpenModal: {
      description: `Estado para controlar o modal`,
      defaultValue: 'undefined',
    },
  },
} satisfies Meta<typeof MultiselectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    items: data.demo[0].data,
  },
};

export const Selected: Story = {
  args: {
    focus: true,
    items: data.secondItems,
  },
};
