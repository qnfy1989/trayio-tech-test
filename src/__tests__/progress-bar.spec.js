import React from 'react';
import {render, cleanup} from 'react-testing-library';
import ProgressBar from '../components/ProgressBar';

const tabs = ['User', 'Privacy', 'Done'];
const setup = () => {
  const utils = render(<ProgressBar currentTab={'User'} tabs={tabs} />);
  const {container: progressBar} = utils;
  return {
    progressBar,
  };
};

afterEach(cleanup);

test('it renders three tabs in case three tabs are given', () => {
  const {progressBar} = setup();
  const liTags = progressBar.querySelectorAll('li');
  expect(liTags.length).toEqual(tabs.length);
});
