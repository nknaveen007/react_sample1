import React,{useState} from 'react'
import '../styles/TopForm.css'
import moment from 'moment'

export default function TopForm({setyearList,setdetailsList,yearList,detailsList}) {
    const [title, settitle] = useState('')
    const [amount, setamount] = useState(0.8)
    const [date, setdate] = useState(new Date())
    const [year, setyear] = useState('')

   
    const onSubmit = (event) => {
        event.preventDefault()
        
        const value = yearList.find((value) => value === year);
        if (value) {
            //pass
        } else {
            setyearList((preYears) => {
                return [...preYears,year]
            })
        }
        
        const list = detailsList[year]?detailsList[year].detail:[]
        list.push({
            title,
            amount,
            date
        })
        if (detailsList[year]?.detail) {
            detailsList[year].detail=list
        } else {
            detailsList[year] = {
                detail:list
            }
        }
         
        
        setdetailsList(detailsList)
        console.log(detailsList)
        
        
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit} className='form'>
                <div className="mb-3 formInside">
                    <div>
                        <label  className="form-label">Title</label>
                        <input type="text"  className="form-control" value={title} onChange={ event=>settitle(event.target.value)}/>
                    </div>
                    <div>
                        <label  className="form-label">Amount in $</label>
                        <input type='number' min={0.8} step={1.5} className="form-control" value={amount} onChange={event=>setamount(event.target.value)}/>
                    </div>
                    <div>
                        <label  className="form-label">Date</label>
                        <input type='date' className="form-control" onChange={event => {
                            setdate(moment(event.target.value).format('Do MMMM YYYY'))
                            setyear(moment(event.target.value).format('YYYY'))
                        }
                        } min="2019-10-30" max="2028-10-30" />
                    </div>
                </div>
                <button type='submit' className='btn btn-primary subBtn'>Add Datas</button>
            </form>
        </div>
    )
}
