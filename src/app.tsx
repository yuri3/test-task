import React, { Component } from 'react';
import Row from './components/row';
import Col from './components/col';
import Card from './components/card';
import { fetchConnectors } from './connectors';
import './app.scss';

const gutter = 24;

type Props = {};

type State = typeof initialState;

type Connector = {
  id: string;
  name: string;
  jpeg_file_url: string;
  pressure_rating: string;
  voltage_rating: number;
  wiregauge: number;
  contacts: string;
}

type RowStyle = {
  paddingTop: string | number,
}

type ColStyle = {
  marginBottom: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  // [others: string]: string | number;
}

const initialState = Object.freeze({
  isFetching: false,
  connectors: [] as Connector[],
});

class App extends Component<Props, State> {
  readonly state = initialState

  componentDidMount() {
    this.setState({ isFetching: true })
    fetchConnectors().then((connectors) => {
      this.setState({ isFetching: false, connectors })
    })
  }

  render() {
    const rowStyle: RowStyle = { paddingTop: '12px' };
    let colStyle: ColStyle = { marginBottom: gutter };

    if (gutter) {
      colStyle = {
        ...colStyle,
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2,
      }
    }

    const { isFetching, connectors } = this.state;

    if (isFetching) {
      return <div className="app" style={{ textAlign: 'center' }}>Loading...</div>
    }

    return (
      <div className="app">
        <Row gutter={gutter} style={rowStyle}>
          {
            connectors.map(({
              id, name, jpeg_file_url, pressure_rating, voltage_rating, wiregauge, contacts,
            }) => {
              return (
                <Col key={id} style={colStyle} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    title={name}
                    cover={<img src={jpeg_file_url} alt={name} />}
                    infoList={[{
                      id: '1', name: 'Pressure Rating', count: pressure_rating,
                    }, {
                      id: '2', name: 'Voltage Rating', count: voltage_rating,
                    }, {
                      id: '3', name: 'Wire Gauges', count: wiregauge,
                    }, {
                      id: '4', name: 'Contacts', count: contacts,
                    }]}
                    actions={[
                      <img src="/bookmark.png" alt="Bookmark" />,
                      <img src="/share.png" alt="Share" />,
                      <img src="/magic-wand.png" alt="Magic wand" />
                    ]}
                  />
                </Col>
              )
            })
          }
        </Row>
      </div>
    );
  }
}

export default App;
