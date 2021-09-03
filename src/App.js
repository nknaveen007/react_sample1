import React,{useState} from 'react'
import BottomView from './components/BottomView.jsx'
import TopForm from './components/TopForm.jsx'


const App = () => {
    const [detailsList, setdetailsList] = useState({})
    const [yearList, setyearList] = useState([])

    return (
        <div>
            <TopForm setyearList={setyearList} setdetailsList={setdetailsList} yearList={yearList} detailsList={detailsList}/>
            <BottomView yearList={yearList} detailsList={detailsList} setdetailsList={setdetailsList}/>
        </div>
 )    
}

export default App
