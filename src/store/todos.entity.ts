import { entity } from "simpler-state";
import ITodo from "../types";

export const todoEntity = entity<ITodo[]>([]);

export const addTodo = (todo: string) =>
  todoEntity.set((store) => [
    ...store,
    { id: Math.random().toString(36).substring(2), todo, completed: false },
  ]);

export const removeTodo = (id: string) =>
  todoEntity.set((store) => store.filter((todo) => todo.id !== id));

export const toggleTodo = (id: string) =>
  todoEntity.set((store) =>
    store.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    })
  );
