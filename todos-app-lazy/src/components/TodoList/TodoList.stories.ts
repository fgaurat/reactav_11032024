import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TodoList from './TodoList';
import "bootstrap/dist/css/bootstrap.css"

const meta = {
    title: 'Orsys/TodoList',
    component: TodoList,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],


  } satisfies Meta<typeof TodoList>;


export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyTodoList: Story = {
    args: {
      todos: [],
      isLoading: false,
      doDelete:()=>{}
    },
  };

  export const DataTodoList: Story = {
    args: {
      todos: [
        {
            "userId": 1,
            "id": "6",
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
          },
          {
            "userId": 1,
            "id": "7",
            "title": "illo expedita consequatur quia in",
            "completed": false
          },
          {
            "userId": 1,
            "id": "8",
            "title": "quo adipisci enim quam ut ab",
            "completed": true
          }          
      ],
      isLoading: false,
      doDelete:()=>{}
    },
  };