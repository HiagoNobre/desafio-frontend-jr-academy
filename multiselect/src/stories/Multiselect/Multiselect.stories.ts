import type { Meta, StoryObj } from '@storybook/react';

import { Multiselect } from './Multiselect';
import data from '../../data';

const meta = {
  title: 'App/Multiselect',
  component: Multiselect,
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
      value: true,
      defaultValue: true,
    },
    isOpenModal: {
      description: `Define se o modal deve permanecer aberto`,
      value: false,
      defaultValue: false,
    },

  },
} satisfies Meta<typeof Multiselect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    items: data.secondItems,
  }
};

export const FirtState: Story = {
  args: {
    focus: true,
    isOpenModal: true,
    title: undefined,
    items: data.demo[3].data,
  }
};

export const SecondState: Story = {
  args: {
    title: undefined,
    focus: true,
    isOpenModal: true,
    items: data.demo[1].data,
  }
};

export const ThirdState: Story = {
  args: {
    title: undefined,
    focus: true,
    isOpenModal: true,
    items: data.demo[4].data,
  }
};

export const FourthState: Story = {
  args: {
    title: undefined,
    focus: false,
    isOpenModal: false,
    items: data.demo[2].data,
  }
};
