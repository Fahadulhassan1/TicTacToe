/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      player1: "true" ,
      player2 : "false",
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      title6: "",
      title7: "",
      title8: "",
      title9: "",
      array1 : [[0,0,0] , [0,0,0] , [0,0,0]]
      
    };

  }
  tictactoe(e){

        if(e == "1"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title1: "X" ,
              
              
              })
              
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title1 : "O"
            })
          }
        }else if(e == "2"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title2: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title2 : "O"
            })
          }
        }
        else if(e == "3"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title3: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title3 : "O"
            })
          }
        }
        else if(e == "4"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title4: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title4 : "O"
            })
          }
        }
        else if(e == "5"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title5: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title5 : "O"
            })
          }
        }else if(e == "6"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title6: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title6 : "O"
            })
          }
        }else if(e == "7"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title7: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title7 : "O"
            })
          }
        }else if(e == "8"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title8: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title8 : "O"
            })
          }
        }else if(e == "9"){
          if(this.state.player1 == "true"){
            this.setState({
              player1: "false",
              player2 : "true" ,
              title9: "X"
              })
          }else{
            this.setState({
              player1: "true" ,
              player2: "false" ,
              title9 : "O"
            })
          }
        }
        
}
winner(){

  for(let i = 0 ; i <= 3 ; i++){
         

    }

   
  return(
    <View>
      <Text>hello</Text>
    </View>
  )
}



  render(){
    return(
      
    
<View style = {{ flex : 1  , justifyContent: "center" , borderColor : "red"  , borderwidth : 1, }}>
    <View style = {{alignSelf : "center", justifyContent: "center" }}>{this.state.player1 == "true" ? <Text  style={{transform: [{rotateY: '180deg'}], fontSize: 24,}}>Player2fahad</Text> : <Text style={{transform: [{rotateY: '180deg'}] , fontSize: 24,}}>Player1</Text>}</View>
  
<View style = {{ borderColor : "red"  , borderwidth : 1, paddingTop : "10%" ,flexDirection : "row" ,
    justifyContent: 'center', alignSelf: 'center',   
    }}> 
    <View style = {{ borderColor : "red"  , borderwidth : 1,width: "20%"}}>   
<Button title = {this.state.title1} onPress  ={this.tictactoe.bind(this , "1")}/>

</View> 
 
<View style = {{ width: "20%"}}> 

<Button title = {this.state.title2}  onPress  ={this.tictactoe.bind(this , '2')}/>
</View> 
 
<View style = {{ width: "20%"}}> 
<Button title = {this.state.title3}  onPress  ={this.tictactoe.bind(this , '3')}/>
</View> 
 

</View>
<View style = {{ flexDirection : "row" ,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems : "center" ,
    }}> 
    <View style = {{ width: "20%"}}>   
<Button title ={this.state.title4} onPress  ={this.tictactoe.bind(this , '4')}/>

</View> 
 
<View style = {{ width: "20%"}}> 

<Button title = {this.state.title5} onPress  ={this.tictactoe.bind(this , '5')}/>
</View> 
 
<View style = {{ width: "20%"}}> 
<Button title = {this.state.title6} onPress  ={this.tictactoe.bind(this , '6')}/>
</View> 
 

</View>
<View style = {{ flexDirection : "row" ,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems : "center" ,
    }}> 
    <View style = {{ width: "20%"}}>   
<Button title = {this.state.title7} onPress  ={this.tictactoe.bind(this , '7')}/>

</View> 
 
<View style = {{ width: "20%"}}> 

<Button title = {this.state.title8} onPress  ={this.tictactoe.bind(this , '8')}/>
</View> 
 
<View style = {{ width: "20%"}}> 
<Button title = {this.state.title9} onPress  ={this.tictactoe.bind(this , '9')}/>
</View> 
 

</View>
<View style = {{alignSelf : "center", justifyContent: "center" }}>
  {this.state.player1 == "true" ? <Text  style={{ fontSize: 24,}}>Player2</Text> : <Text style={{fontSize: 24,}}>Player1</Text>}
  </View>


</View>
    )
  };

}

export default App;
