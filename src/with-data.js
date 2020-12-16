import React from 'react';

const withData = (WrappedComponent, dataSource) => {
  class WithData extends React.Component {
    state = {
      data: []
    };

    componentDidMount() {
      fetch(dataSource)
      .then(response => response.json())
      .then(data => this.setState({ data: data.slice(0,3) }))
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }

  return WithData;
}

export default withData;