const React = require('react-native');
const Dimensions = require('Dimensions');
var { Icon, } = require('react-native-icons');
var Setting=require('./system/setting');
var Filter=require('./system/filter');
var Disclaimer=require('./system/disclaimer');
var About=require('./system/about');
var Syncdata=require('./system/syncdata');
var Login=require('./account/login');
var Nav=require('./nav');
const {
  TouchableNativeFeedback,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Component,
} = React;

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    flexDirection:'column',
    backgroundColor: '#fff'
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    flexDirection:'row',
    height:50,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:15,
    borderBottomWidth:1,
    borderBottomColor:'#f3f3f3',
    alignItems:'center'
  },

});
var MenuItem=React.createClass({
  propTypes:{
    component:React.PropTypes.object
  },
  onItemSelect:function(){    
    this.props.onMenuSelect&&this.props.onMenuSelect();
    Nav.open(this.props.component);
  },
  render: function() {
    return (
      <TouchableNativeFeedback 
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.onItemSelect}>
          <View style={styles.item}>
            <Icon
                name={this.props.icon}
                size={25}
                color={"#C00"}
                style={{width:40,height:25}}
              />
            <Text>{this.props.children}</Text>
          </View>
        </TouchableNativeFeedback>
    );
  }
});

class Menu extends Component {
  onMenuSelect(){
    this.props.onMenuSelect&&this.props.onMenuSelect();
  }
  render() {
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Your name</Text>
        </View>        
        <MenuItem component={<Login/>} icon={"fontawesome|user"} onMenuSelect={this.onMenuSelect.bind(this)}>登录</MenuItem>
        <MenuItem component={<Filter/>} icon={"fontawesome|filter"}  onMenuSelect={this.onMenuSelect.bind(this)}>数据过滤</MenuItem>
        <MenuItem component={<Setting/>} icon={"fontawesome|cogs"}  onMenuSelect={this.onMenuSelect.bind(this)}>设置</MenuItem>
        <MenuItem component={<Syncdata/>} icon={"fontawesome|cogs"}  onMenuSelect={this.onMenuSelect.bind(this)}>数据同步</MenuItem>
        <MenuItem component={<Disclaimer/>} icon={"fontawesome|warning"}  onMenuSelect={this.onMenuSelect.bind(this)}>免责声明</MenuItem>
        <MenuItem component={<About/>} icon={"fontawesome|users"}  onMenuSelect={this.onMenuSelect.bind(this)}>关于我们</MenuItem>
      </ScrollView>
    );
  }
}
        // <MenuItem name={"return"} icon={"fontawesome|phone"} >返回</MenuItem>
module.exports = Menu;