'use strict';
var React = require('react-native');
var Titlebar=require('../control/titlebar');
var IconButton=require('../control/button');
var myStockAction=require('../../actions/myStockAction');
var myObjectAction=require('../../actions/objectAction');
var {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;
var styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff'
	}
});
var Component=React.createClass({
	onDownLoad:function(){
		myStockAction.downLoad();
		myObjectAction.downLoad();
	},
	onUpLoad:function(){
		myStockAction.upLoad();
		myObjectAction.upLoad();
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Titlebar showBack={true}  title={"数据同步"}/>
				<View style={{flex:1}}>
					<IconButton text={'下载数据'} onPress={this.onDownLoad}/>
					<IconButton text={'上传数据'} onPress={this.onUpLoad}/>
				</View>
			</View>
		);
	}	
});

module.exports=Component;