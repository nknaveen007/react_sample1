import React,{useState} from 'react'
import '../styles/BottomView.css'
import DetailsBox from './DetailsBox.jsx'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function BottomView({yearList,detailsList}) {
    const [year, setyear] = useState(yearList[0])
    return (
        <div className='container'>
             <Dropdown options={yearList} onChange={element => {
                    let val = Math.random()
                    console.log(val)
                    setyear(element.value)
                   
                }
                } value={yearList[0]} placeholder="Select an Year" />
            <DetailsBox yearList={yearList} detailsList={detailsList[year]?.detail} />
        </div>
    )
}
