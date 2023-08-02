import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'active' | 'done' | 'archived';
}

interface State {
  active: Task[];
  done: Task[];
  archived: Task[];
}

const initialState: State = {
  active: [],
  done: [],
  archived: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(storeState, action: PayloadAction<Task>): void {
      storeState.active = storeState.active.concat(action.payload);
    },
    deleteTask(storeState, action: PayloadAction<number>): void {
      const activeIndex = storeState.active.findIndex(
        (task: Task) => task.id === action.payload
      );
      const doneIndex = storeState.done.findIndex(
        (task: Task) => task.id === action.payload
      );
      const archivedIndex = storeState.archived.findIndex(
        (task: Task) => task.id === action.payload
      );

      if (activeIndex !== -1) {
        storeState.active.splice(activeIndex, 1);
      }
      if (doneIndex !== -1) {
        storeState.done.splice(doneIndex, 1);
      }
      if (archivedIndex !== -1) {
        storeState.archived.splice(archivedIndex, 1);
      }
    },
    editTask(storeState, action: PayloadAction<Task>) {
      const { id, title, description, category } = action.payload;

      const activeIndex = storeState.active.findIndex(
        (task: Task) => task.id === id
      );
      const doneIndex = storeState.done.findIndex(
        (task: Task) => task.id === id
      );
      const archivedIndex = storeState.archived.findIndex(
        (task: Task) => task.id === id
      );

      if (activeIndex !== -1) {
        storeState.active[activeIndex] = {
          ...storeState.active[activeIndex],
          title,
          description,
          category,
        };
      }
      if (doneIndex !== -1) {
        storeState.done[doneIndex] = {
          ...storeState.done[doneIndex],
          title,
          description,
          category,
        };
      }
      if (archivedIndex !== -1) {
        storeState.archived[archivedIndex] = {
          ...storeState.archived[archivedIndex],
          title,
          description,
          category,
        };
      }
    },
    moveInGroup(
      storeState,
      action: PayloadAction<{
        id: number;
        from: 'active' | 'done' | 'archived';
        to: 'active' | 'done' | 'archived';
      }>
    ) {
      const { id, from, to } = action.payload;
      const taskIndex = storeState[from].findIndex(
        (task: Task) => task.id === id
      );
      if (taskIndex !== -1) {
        const taskToMove = storeState[from][taskIndex];
        storeState[from].splice(taskIndex, 1);
        storeState[to].push(taskToMove);
      }
    },
  },
});

export const { createTask, editTask, deleteTask, moveInGroup } =
  taskSlice.actions;
