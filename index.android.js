'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Navigator
} = React;


var NewsItems = require('./components/news-items');
var WebPage = require('./components/webpage');

var ROUTES = {
  news_items: NewsItems,
  web_page: WebPage
};


var HnReader = React.createClass({  

  renderScene: function(route, navigator) {

    var Component = ROUTES[route.name];
    return (
        <Component route={route} navigator={navigator} url={route.url} />
    );
  },

  render: function() {
    return (
      <Navigator 
        style={styles.container} 
        initialRoute={{name: 'news_items', url: ''}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    );

  },


});


var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('HnReader', () => HnReader);
