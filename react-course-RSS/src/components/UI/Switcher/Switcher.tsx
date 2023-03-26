import React, { Component } from 'react';

import './switcher.css';

interface SwitcherProps {
  refTo: React.RefObject<HTMLInputElement>;
  error: boolean;
  isToggled: boolean;
}

interface SwitcherState {
  switchState: boolean;
}

export default class Switcher extends Component<SwitcherProps, SwitcherState> {
  constructor(props: SwitcherProps) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { switchState: props.isToggled };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    this.setState((prevState) => ({ switchState: !prevState.switchState }));
  }

  render() {
    const { error, refTo } = this.props;
    const { switchState } = this.state;
    const errorBlock = error ? (
      <div className="error-switcher error-box">
        Please, agree with privacy policy
      </div>
    ) : (
      ''
    );
    return (
      <div className="switch-box">
        <div className="switch-box_row">
          <label htmlFor="switcher" className="switch">
            <input
              id="switcher"
              className="switch__check"
              ref={refTo}
              type="checkbox"
              checked={switchState}
              onChange={this.handleOnChange}
            />
            <span className="slider" />
          </label>
          <div className="switch__description">I agree with privacy policy</div>
        </div>

        {errorBlock}
      </div>
    );
  }
}
