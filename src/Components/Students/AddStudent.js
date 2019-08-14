//Lib Imports
import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput,FlatList,TouchableOpacity,Picker} from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { bindActionCreators } from 'redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CountryStates  from '../../Utilities/CountryStates'
import Studies from '../../Utilities/Studies'
//Local Imports
import styles from './styles';
import { addStudent,editStudent } from '../../Redux/Actions';
import { generateGuid} from '../../Utilities/GlobalFunctions';
import ModalHeader from './ModalHeader';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form : [{id:'Name',value:this.props.editText.Name ? this.props.editText.Name : ''},
      {id:'MiddleName',value:this.props.editText.MiddleName ? this.props.editText.MiddleName : ''},
      {id:'LastName',value:this.props.editText.LastName ? this.props.editText.LastName : ''},
      {id:'Specialization',value:this.props.editText.Specialization ? this.props.editText.Specialization : ''},
      {id:'Latest Education',value:this.props.editText.Education ? this.props.editText.Education : ''},
    ],
    address:[{id:'House no',value:this.props.editText.Houseno ? this.props.editText.Houseno : ''},
    {id:'Locality',value:this.props.editText.Locality ? this.props.editText.Locality : ''},
    {id:'City ot Town',value:this.props.editText.City ? this.props.editText.City : ''},
    {id:'State',value:this.props.editText.State ? this.props.editText.State : ''},
    {id:'Pincode',value:this.props.editText.Pincode ? this.props.editText.Pincode : ''},
  ],
    date : this.props.editText.Dob ? this.props.editText.Dob : '',
    age : this.props.editText.Age ? this.props.editText.Age : 0,
    isVisibleStartDate: false,
    };
  }
  addProduct = () => {
    let {form,address}=this.state;
    let data = {
      Status: "Active",
      StudentId: generateGuid(),
      Name: form[0].value,
      MiddleName: form[1].value,
      LastName: form[2].value,
      Specialization: form[3].value,
      Education: form[4].value,
      Dob: this.state.date,
      Houseno:address[0].value,
      Locality:address[1].value,
      City:address[2].value,
      State:address[3].value,
      Pincode:address[4].value
    };
    if (this.props.editmode) {
      let list = this.props.studentsList
      let data1 = list[this.props.index];
      data1.Name = form[0].value;
      data1.MiddleName = form[1].value;
      data1.LastName = form[2].value;
      data1.Specialization=form[3].value;
      data1.Education=form[4].value;
      data1.Dob=this.state.date;
      data1.Houseno=address[0].value;
      data1.Locality=address[1].value;
      data1.City=address[2].value;
      data1.State=address[3].value;
      data1.Pincode=address[4].value
      list[this.props.index]=data1
      this.props.editStudent(list)
    }
    if(!this.props.editmode){
    this.props.addStudent(data)
    }
    this.props.setModalVisibility();
}

  fieldValidation = () => {
    const { form} = this.state;
    if(form[0].value!=''){
      this.addProduct();
    }
    else {
      alert("Please fill all the fields")
    }
  }
  onTextsunmit=(text,index)=>{
      let formlist=[...this.state.form]
      formlist[index].value=text
      this.setState({form:formlist})
  }
  renderItem=({item,index})=>{
    if(item.id=="Latest Education")
     return this.onState(item,index)
     else
     return this.information(item,index,"form")
  }
  _keyExtractor = (item, index) => index.toString();
  onDelete=()=>{
    let list=[...this.props.studentsList]
    let data1=list[this.props.index]
    data1.Status='Inactive'
    list[this.props.index]=data1
    this.props.editStudent(list)
    this.props.setModalVisibility()
  }
  toggleDateTimePicker = () => {
        this.setState({ isVisibleStartDate: !this.state.isVisibleStartDate });
  }
  handleDatePicked = (datetime) => {
    let Deliverydate=moment(datetime).format('DD-MM-YYYY');
    this.ageCalculate(Deliverydate);
    this.setState({date:Deliverydate})
    this.toggleDateTimePicker();
  }
  onAddresssunmit=(text,index)=>{
    let formlist=[...this.state.address]
    formlist[index].value=text
    this.setState({address:formlist})
  }
  onState=(item,index)=>{
    let list=item.id=="State" ? CountryStates : Studies;
    return(
      <View>
      <Text style={[styles.label,{marginTop:4}]}>{item.id} <Text style={styles.importantFields}>*</Text></Text>
    <Picker
         selectedValue={item.value}
          onValueChange={(itemValue) => item.id=="State" ? this.onAddresssunmit(itemValue,index) : this.onTextsunmit(itemValue,index)}>
                {
                  list.map((state) => <Picker.Item label={state} value={state} key={state} />)
                }
              </Picker>
              </View>
    )
  }
  information=(item,index,key)=>{
    return(
      <View>
      <Text style={[styles.label,{marginTop:4}]}>{item.id} <Text style={styles.importantFields}>*</Text></Text>
      <TextInput
        placeholder={"Enter" +" " + item.id}
        onChangeText={(text) => key=="address" ? this.onAddresssunmit(text,index) : this.onTextsunmit(text,index)}
        value={item.value}
        editable={true}
        style={styles.input}
        // autoFocus={true}
        multiline={true}
        keyboardType={item.id=='Pincode' ? 'numeric' : 'default'}
        underlineColorAndroid='#0000' 
      />
    </View>
    )
  }
  renderAddress=({item,index})=>{
   if(item.id=='State')
   return this.onState(item,index)
   else
   return this.information(item,index,"address")
    
  }
  ageCalculate=(date)=>{
  const year = Number(1996);
  const month = Number(6);
  const day = Number(12);
  const today = new Date();
  const age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
this.setState({age:age})
  }
  render() {
    const {editmode} = this.props;
    let title = 'Add Students';
    console.log(typeof this.state.age,this.state.age)
    return (
      <View style={styles.addproductcontainer}>
        <ModalHeader color={'#25a'} onSave={this.fieldValidation} onClose={this.props.setModalVisibility} onDelete={this.onDelete}
          title={title} editmode={editmode}
        />
        <ScrollView keyboardShouldPersistTaps='always'>
          <View style={styles.Bodycard}>
          < FlatList
              data={this.state.form}
              extraData={this.state}
              renderItem={this.renderItem}
              keyExtractor={this._keyExtractor}
            />
              <View>
        <Text style={styles.label}>Date of birthday <Text style={styles.importantFields}>*</Text></Text>
        <TouchableOpacity onPress={this.toggleDateTimePicker}>
          <View style={styles.detailStyle}>
            <TextInput 
              placeholder="Dob"
              editable={false}
              onChangeText={(text) => this.setState({ date: text })}
              value={this.state.date}
              style={[styles.input,styles.modalContainerView]}
            />
            <Icon name="calendar" style={styles.calendarIcon} />
          </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisibleStartDate}
          onConfirm={this.handleDatePicked}
          onCancel={this.toggleDateTimePicker}
          mode='date'
        />
      </View>
     {this.state.date !='' ?
     <View> 
       <Text>Age</Text>
      <Text>{this.state.age}</Text> </View>: null}
      < FlatList
              data={this.state.address}
              extraData={this.state}
              renderItem={this.renderAddress}
              keyExtractor={this._keyExtractor}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: bindActionCreators(addStudent, dispatch),
    editStudent:bindActionCreators(editStudent,dispatch)
  };
};

export default connect(null, mapDispatchToProps)(AddStudent);
