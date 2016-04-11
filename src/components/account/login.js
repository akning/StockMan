/* @flow */
'use strict';

var React = require('react-native');
var Button=require('../control/button');
var Titlebar=require('../control/titlebar');
var {
  UmengLogin
}=require('react-native-android-lib');

var {
  StyleSheet,
  View,
  TextInput,
  NativeAppEventEmitter,
  Text
} = React;

var Login = React.createClass({
  getInitialState: function() {
    UmengLogin.Init({
      'weixin':['wxf832ed541cc842af','98a353ee2d2e14cb1621170483079828'],
      'sina':['1505531472','88490537c7f79c0ad074254f6367cd28'],
      'qq':['1103536633','oZpzpHzkiFjK8nQ6']
    });

    return {
      username:'',
      password:'',
      nickname:''
    };
  },
  onLogin:function (target) {
    UmengLogin.Login(target,
      function (argument) {
      // body...
      },
      function (argument) {
        // body...
      }
    );
  },
  bindTarget:function (target) {
    var me=this;
    return function(){ 
      me.onLogin(target);
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
          <Titlebar showBack={true}/>
           <View style={styles.title}>
            <Text style={styles.titleText}>第三方登录</Text>
          </View>
          <Button text={"微信"} color={"#6EB244"}  icon={"fontawesome|wechat"}   style={styles.loginBtn} onPress={this.bindTarget('weixin')}/>
          <Button text={"QQ"} color={"#5a98de"}  icon={"fontawesome|qq"}  style={styles.loginBtn} onPress={this.bindTarget('qq')}/>
          <Button text={"新浪"} color={"#D25E52"}  icon={"fontawesome|weibo"}  style={styles.loginBtn} onPress={this.bindTarget('sina')}/>
      </View>
    );
  }
});


var styles = StyleSheet.create({
 	container:{
    flex:1,
    backgroundColor:"#ffffff"
  },
  title:{
    alignItems: 'center',
    padding:15
  },
  titleText:{
    fontSize:20
  },
  loginBtn:{
    backgroundColor:"#e5e5e5",
    margin:5,
    borderRadius:5
  }
});

/*
            <Button text={"登录"} color={"#ffffff"} icon={"fontawesome|qq"} style={styles.loginBtn} onPress={this.onLogin}/>

        <TextInput placeholder={"账号"} onChangeText={(text) => this.setState({username:text})}/>
          <TextInput placeholder={"昵称 默认匿名"} onChangeText={(text) => this.setState({nickname:text})}/>
          <TextInput placeholder={"密码"} secureTextEntry ={true} onChangeText={(text) => this.setState({password:text})}/>

*/
module.exports = Login;