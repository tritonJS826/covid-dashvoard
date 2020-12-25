import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import jest, { describe, expect, it } from 'jest';
import ChartPagination from '../ChartPagination/ChartPagination';
import ChartBlock from './ChartBlock';
import Chart from '../Chart';

const onDoubleClick = jest.fn();

const props = {
  data: {},
};

describe('ChartBlock', () => {
  describe('should be render', () => {
    it('render ChartPagination component', () => {
      const div = document.createElement('div');
      act(() => {
        ReactDOM.render(<ChartBlock />, div);
      });
      expect([div.children[0].children[1]]).toBe(<ChartPagination />);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('render Chart component with data', () => {
      const div = document.createElement('div');
      act(() => {
        ReactDOM.render(<ChartBlock data={props.data} />, div);
      });
      expect([div.children[0].children[0]]).toBe(<Chart data={props.data} />);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('react on doubleClick', () => {
      const div = document.createElement('div');
      act(() => {
        ReactDOM.render(<ChartBlock data={props.data} />, div);
      });
      act(() => {
        ChartBlock.dispatchEvent(new MouseEvent('doubleclick', { bubbles: true }));
      });
      expect(onDoubleClick).toHaveBeenCalledTimes(1);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('fixed on doubleClick', () => {
      const div = document.createElement('div');
      act(() => {
        ReactDOM.render(<ChartBlock data={props.data} />, div);
      });
      act(() => {
        ChartBlock.dispatchEvent(new MouseEvent('doubleclick', { bubbles: true }));
      });
      expect(div.children[0].position).tobe('fixed');
      ReactDOM.unmountComponentAtNode(div);
    });
    it('grow on doubleClick', () => {
      const div = document.createElement('div');
      act(() => {
        ReactDOM.render(<ChartBlock data={props.data} />, div);
      });
      act(() => {
        ChartBlock.dispatchEvent(new MouseEvent('doubleclick', { bubbles: true }));
      });
      expect(div.children[0].clientHeight).tobe('100vh');
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
