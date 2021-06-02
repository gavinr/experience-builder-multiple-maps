/** @jsx jsx */
import {React, AllWidgetProps,  jsx } from 'jimu-core';
import { IMConfig } from '../config';
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any> {
  constructor(props) {
    super(props);

    this.state = {
      jimuMapViews: [],
      mapWidgetIds: []
    };
  }

  componentDidMount() {
    const mapWidgetIds = Object.values(window._appState.appConfig.widgets).filter((widgetInfo: any) => {
      return widgetInfo.uri === 'widgets/arcgis/arcgis-map/'
    }).map((widgetInfo: any) => {
      return widgetInfo.id;
    });
    this.setState({
      mapWidgetIds: mapWidgetIds
    });
  }

  render() {
    return (
      <div className="widget-demo jimu-widget m-2">
        {this.state.mapWidgetIds.map(widgetId => (
          <JimuMapViewComponent
            useMapWidgetId={widgetId}
            onActiveViewChange={(jmv: JimuMapView) => {
              const jimuMapViews = [...this.state.jimuMapViews, jmv];
              this.setState({
                jimuMapViews: jimuMapViews,
              });
            }}
          />
        ))}

        <div>
          <select>
            <option value="-87.629700, 41.873651">Chicago</option>
            <option value="-90.196381, 38.622235">St. Louis</option>
            <option value="-98.490028, 29.430029">San Antonio</option>
          </select>
        </div>

        <div>
          {this.state.jimuMapViews.map(jmv => (
            <p>{jmv.datasourceId}</p>
          ))}
        </div>
      </div>
    );
  }
}
