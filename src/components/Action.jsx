import React, { useState, useRef, useEffect } from 'react';
import Move from '../images/move.svg';
import Delete from '../images/delete.svg';
import Indent from '../images/indent.svg';
import '../App.css';

const Actions = ({ onDeleteClick }) => {
    const [standard, setStandard] = useState('');
    const [IndentVal, setIndentVal] = useState(false);
    const [standardObj, setStandardObj] = useState({});
    const standardTextRef = useRef(null);
    const standardInputRef = useRef(null);
    const actionDivRef = useRef(null);
    const standardRef = useRef(null);

    const onChange = (e) => {
        setStandard(e.target.value);
        // setStandardObj(prevState => ({
        //     ...prevState,
        //     [e.target.value]: e.target.value
        // }));
    }

    const onStandardTextClick = () => {
        standardTextRef.current.classList.add('none');
        standardTextRef.current.classList.remove('visible');
        standardInputRef.current.classList.add('visible');
        standardInputRef.current.classList.remove('none');
    }

    const standardInputBlur = () => {
        standardTextRef.current.classList.add('visible');
        standardTextRef.current.classList.remove('none');
        standardInputRef.current.classList.remove('visible');
        standardInputRef.current.classList.add('none');
    }

    const onOutdentClick = () => {
        setIndentVal(false);
    }

    const onIndentClick = () => {
        setIndentVal(true);
    }

    const standardDisplay = (standard) => {
        if(IndentVal && standard) {
            standardRef.current.classList.add('marginLeft');
            return (<div className="IndentVal">{standard}</div>); 
        } else if(standard && !IndentVal) {
            standardRef.current.classList.remove('marginLeft');
            return (<div className="inputVal">{standard}</div>); 
        } return 'Type standard here (e.g. Numbers)'  
    }

    // const clickOutside = (e) => {
    //     console.log('e', e);
    //     document.addEventListener('click', standardInputBlur);
    // }

    // useEffect(() => {
       
    // }, [standard])

   // console.log('standardTextRef', standardTextRef.current.innerText);

//    if(standardTextRef.current && standardTextRef.current.innerText) {
//         actionDivRef.current.classList.add('opacity');
//     } else if(!standardTextRef.current) {
//         actionDivRef.current.classList.remove('opacity');
//     }

    return (
        <div className="actionWrapper" id="action"> 
            <div className="action" ref={actionDivRef}>
                <img src={Move} alt="move" className='img'/>
                <img src={Indent} alt="outdent" className='outdentImg' onClick={onOutdentClick}/>
                <img src={Indent} alt="indent" className='img' onClick={onIndentClick} />
                <img src={Delete} alt="delete" className='img' onClick={onDeleteClick}/>
            </div>
            <div className="standard" ref={standardRef}>
                <div className="separator">-</div>
                <div 
                   className="standardText" 
                   ref={standardTextRef}
                   onClick={onStandardTextClick}
                >
                  {standardDisplay(standard)}
                </div>
                <input 
                  value={standard}
                  onChange={onChange}
                  className="standardInput none"
                  placeholder="Type standard here (e.g. Numbers)"
                  ref={standardInputRef}
                  onBlur={standardInputBlur}
                />
            </div>
        </div>
    )
}

export default Actions;