import { Component } from 'react';
import { createEagerFactory, setDisplayName, wrapDisplayName } from 'recompose';

const noop = () => {};

const withSheet = ({ apiKey, clientId, sheetId }, ranges) => BaseComponent => {
  const factory = createEagerFactory(BaseComponent);

  class WithSheet extends Component {
    state = {
      authorizing: false,
      data: null,
      initializing: true,
      loading: false,
    };

    componentDidMount() {
      global.gapi.load('client:auth2', this.handleLoad);
    }

    handleLoad = () => {
      global.gapi.client
        .init({
          apiKey,
          clientId,
          discoveryDocs: [
            'https://sheets.googleapis.com/$discovery/rest?version=v4',
          ],
          scope: 'https://www.googleapis.com/auth/spreadsheets',
        })
        .then(() => {
          const GoogleAuth = global.gapi.auth2.getAuthInstance();

          GoogleAuth.isSignedIn.listen(this.handleAuth);
          this.handleAuth(GoogleAuth.isSignedIn.get());
        });
    };

    handleAuth = isAuthorized => {
      if (isAuthorized) {
        global.gapi.client.sheets.spreadsheets.values
          .batchGet({ ranges, spreadsheetId: sheetId })
          .then(response =>
            this.setState({
              data: response.result.valueRanges,
              loading: false,
            }),
          );
      }

      this.setState({
        authorizing: !isAuthorized,
        initializing: false,
        loading: isAuthorized,
      });
    };

    render() {
      const signIn = !this.state.initializing
        ? () => global.gapi.auth2.getAuthInstance().signIn()
        : noop;

      return factory({
        ...this.props,
        ...this.state,
        onSignIn: signIn,
      });
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'withSheet'))(
      WithSheet,
    );
  }

  return WithSheet;
};

export default withSheet;
