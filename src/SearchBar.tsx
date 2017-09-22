import * as React from 'react';

export interface SearchBarProps { };
export interface SearchbarState { term: string };

class SearchBar extends React.Component<SearchBarProps, SearchbarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = { term: '' };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  private onChangeInput(event: any) {
    this.setState({ term: event.target.value });
  }

  private onSubmitForm(event: any) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="input-group">
        <input className="form-control" placeholder="Enter City" value={this.state.term} onChange={this.onChangeInput} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;