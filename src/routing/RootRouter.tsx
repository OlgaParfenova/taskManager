import { Route, Routes } from 'react-router';
import {
  MainPage,
  CreateTaskPage,
  DetailsPage,
  EditTaskPage,
  TestPage,
} from 'pages';
import {
  CREATE_TASK_PAGE_URL,
  DETAILS_PAGE_URL,
  EDIT_TASK_PAGE_URL,
  MAIN_PAGE_URL,
  TEST_PAGE_URL,
} from './endpoints';

export const RootRouter = () => {
  return (
    <Routes>
      <Route path={MAIN_PAGE_URL} element={<MainPage />} />
      <Route path={CREATE_TASK_PAGE_URL} element={<CreateTaskPage />} />
      <Route path={DETAILS_PAGE_URL(':id')} element={<DetailsPage />} />
      <Route path={EDIT_TASK_PAGE_URL(':id')} element={<EditTaskPage />} />
      <Route path={TEST_PAGE_URL} element={<TestPage />} />
    </Routes>
  );
};
