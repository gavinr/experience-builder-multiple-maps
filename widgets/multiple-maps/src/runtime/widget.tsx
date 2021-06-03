/** @jsx jsx */
import {React, AllWidgetProps,  jsx } from 'jimu-core';
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      jimuMapViews: [],
      mapWidgetIds: [],
      selectValue: '',
      lonLat: null
    };
  }

  componentDidMount() {
    // When the widget loads, get all the mapViews from window._appState
    const mapWidgetIds = Object.values(window._appState.appConfig.widgets).filter((widgetInfo: any) => {
      return widgetInfo.uri === 'widgets/arcgis/arcgis-map/'
    }).map((widgetInfo: any) => {
      return widgetInfo.id;
    });
    this.setState({
      mapWidgetIds: mapWidgetIds
    });
  }

  /**
   * Zooms to a point for a single jimuMapView
   * 
   * @param jmv JimuMapView
   * @param lonLat [longitude, latitude]
   */
  jmvGoTo(jmv: JimuMapView, lonLat: number[]) {
    jmv.view.goTo(lonLat);
    jmv.view.zoom = 10;
  }

  /**
   * Gets called when the select changes
   * @param evt 
   */
  selectChangeHandler(evt) {
    // Save the current value
    this.setState({selectValue: evt.target.value});
    
    // Save the longitude/latitude so that if future maps get created, they
    // will use this to zoom to.
    const [longitude, latitude] = evt.target.value.split(',');
    const lonLat = [parseFloat(longitude), parseFloat(latitude)];
    this.setState({ lonLat });

    // Loop through all existing JMVs and set the location.
    this.state.jimuMapViews.forEach((jmv: JimuMapView) => {
      this.jmvGoTo(jmv, lonLat);
    });

  }

  render() {
    return (
      <div className="widget-demo jimu-widget m-2">

        {/* Loop through all mapWidgetIds and create a
        JimuMapViewComponent for each */}
        {this.state.mapWidgetIds.map(widgetId => (
          <JimuMapViewComponent
            useMapWidgetId={widgetId}
            onActiveViewChange={(jmv: JimuMapView) => {
              const jimuMapViews = [...this.state.jimuMapViews, jmv];
              this.setState({
                jimuMapViews: jimuMapViews,
              });
              if (this.state.lonLat) {
                this.jmvGoTo(jmv, this.state.lonLat);
              }
            }}
          />
        ))}

        <div>
          <select onChange={(e) => { this.selectChangeHandler(e); }} value={this.state.selectValue}>
            <option value=""></option>
            <option value="-87.629700,41.873651">Chicago</option>
            <option value="-90.196381,38.622235">St. Louis</option>
            <option value="-98.490028,29.430029">San Antonio</option>
          </select>
        </div>
      </div>
    );
  }
}
