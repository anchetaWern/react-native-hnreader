var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} = React;

var Button = require('react-native-button');
var GiftedSpinner = require('react-native-gifted-spinner');

var _ = require('lodash');

var WebPage = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true
		};
	},

	render: function(){
			
		return (<View style={styles.container}>
		
			<View style={styles.webview_header}>
			  <View style={styles.header_item}>
			  	<Button style={styles.button} onPress={this.back}>Back</Button>
			  </View>
			  <View style={styles.header_item}>
			  	<Text style={styles.page_title}>{this.truncate(this.state.pageTitle)}</Text>
			  </View>
			  <View style={[styles.header_item, styles.spinner]}>
			  	{ this.state.isLoading && <GiftedSpinner /> }
			  </View>
			</View>

			<View style={styles.webview_body}>
				<WebView 
					url={this.props.url}
					onNavigationStateChange={this.onNavigationStateChange}
					
				/>
			</View>
		</View>);

	},

	truncate: function(str){
		return _.truncate(str, 20);
	},

	onNavigationStateChange: function(navState) {
		
		if(!navState.loading){
			this.setState({
				isLoading: false,
				pageTitle: navState.title
			});
		}
	},
	
	back: function(){
	   this.props.navigator.pop();
  	}
});


var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	webview_header: {
		paddingLeft: 10,
		backgroundColor: '#FF6600',
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	header_item: {
		paddingLeft: 10,
		paddingRight: 10,
		justifyContent: 'center'
	},
	webview_body: {
		flex: 9
	},
	button: {
		textAlign: 'left',
		color: '#FFF'
	},
	page_title: {
		color: '#FFF'
	},
	spinner: {
		alignItems: 'flex-end'
	}
});

module.exports = WebPage;