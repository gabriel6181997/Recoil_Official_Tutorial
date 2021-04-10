import {useRecoilValue } from "recoil";
import { TodoItem } from "../components/TodoItem";
import { TodoItemCreator } from "../components/TodoItemCreator";
import { TodoListFilters } from "../components/TodoListFilters";
import { TodoListStats } from "../components/TodoListStats";
import { filteredTodoListState } from "../store/FilteredTodoListState";


export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}


