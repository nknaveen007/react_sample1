import React,{useState,useEffect} from 'react'
import '../styles/DetailsBox.css'


const DetailsBox = ({ yearList,detailsList,setdetailsList ,year}) => {
    
    const [detview, setdetview] = useState([])
    
    
    useEffect(() => {
        console.log('change')
      setdetview( detailsList?.map((value, index) => {
       
        return (
            <div key={Math.random()} className="bodyContainer">
                <div className="dateBox">
                    <h3 className='date'>{ value.date}</h3>
                </div>
                <h2>{value.title}</h2>
                <h3>{ value.amount}$</h3>
            </div>
        )
      }))
       
    }, [year,detailsList])
   
    

    return (
<div className="card">
            <div className="card-header">
                <h3>Data List</h3>
               
            </div>
            <div>
            
            </div>
            <div className="card-body">
            <div  className="bodyContainer">
                <div className="dateBox">
                    <h2 className='date'>Date</h2>
                </div>
                <h2>Title</h2>
                <h2>Amount</h2>
            </div>
                {detview}
            </div>
</div>
           
    )
}

export default DetailsBox