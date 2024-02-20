export const mapStateToProps = (state) => ({
    isLoggedIn: state.get('isUserLoggedIn'), 
  });
  
  
  export default connect(mapStateToProps)(App);




import React from 'react';
import { shallow } from 'enzyme'; 
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  test('returns the right object when passing the state', () => {
    const state = fromJS({
      isUserLoggedIn: true
    });

    const props = mapStateToProps(state);
    expect(props.isLoggedIn).toEqual(true);
  });
});