// TODO: Work through props required for successful rendering
import React from 'react';
import { render } from '@testing-library/react';
import PreviousSettlementWindowInfo from '../components/PreviousSettlementWindowInfo';

xdescribe('<PreviousSettlementWindowInfo />', () => {
  it('should render without crashing', () => {
    const rendered = render(<PreviousSettlementWindowInfo />);
    expect(rendered).toBeTruthy();
  });
});