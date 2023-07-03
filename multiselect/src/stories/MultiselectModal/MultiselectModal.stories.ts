import type { Meta, StoryObj } from '@storybook/react';

import data from '../../data';
import { MultiselectModal } from './MultiselectModal';

const meta = {
  title: 'App/MultiselectModal',
  component: MultiselectModal,
  tags: ['autodocs'],
  argTypes: {
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
    setItems: {
      description: `Set do estado "items => tipo TItems[]" para mudar
       o items passados para o modal mas a caixa de seleção muda mesmo
        sem o uso do set`,
      defaultValue: 'undefined',
    },
    isOpenModal: {
      description: `Define se o modal deve permanecer aberto ou fechado`,
      value: false,
      defaultValue: false,
    },
    primary: {
      description: `Define um novo stilo para o modal. Quando o item é
      selecionado o background assume uma nova cor a mesma do hover`,
      value: false,
      defaultValue: false,
    },
    isModal: {
      description: `Por padrão é um modal mas pode assumir a forma de um
      elemento normal assim ocupando espaço no box do multiselect sendo
      exibido como uma lista comum`,
      value: false,
      defaultValue: true,
    },
  },
} satisfies Meta<typeof MultiselectModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    isOpenModal: true,
    items: data.selectItems([1, 2], data.secondItems),
  }
};

export const Primary: Story = {
  args: {
    primary: true,
    isOpenModal: true,
    items: data.selectItems([1, 2], data.secondItems),
  }
};
