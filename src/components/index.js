import React, {useState} from 'react';
import Button from './Button';
import Divider from './Divider';
import Heading from './Heading';
import Actions from './Action';
import '../App.css';

const AuthoringTool = ({title}) => {
  const [inputList, setInputList] = useState([]);
  const [index, setIndex] = useState(1);

  const onClick = () => {
    setInputList(inputList.concat(  
      <React.Fragment><Actions onDeleteClick={onDeleteClick} key={index} /><Divider/></React.Fragment>
    ));
    setIndex(prevState => prevState+1);
  }

  const onDeleteClick = () => {
    console.log('e', e);
  }

  return (
     <div className='container'>
         <h2 className='title'>{title}</h2>
         <Divider/>
         <Heading/>
         <Divider/>
         <Actions key = '0' />
         <Divider inputList={inputList}/>
         {inputList}
         <Button
           onClick={onClick}
           label='Add a standard'
         />
     </div>
  )
}

export default AuthoringTool;