// TODO: Work through props required for successful rendering
import React from 'react';
import { render } from '@testing-library/react';
import PositionInfo from '../components/PositionInfo';

xdescribe('<PositionInfo />', () => {
  it('should render without crashing', () => {
    const rendered = render(<PositionInfo />);
    expect(rendered).toBeTruthy();
  });
});