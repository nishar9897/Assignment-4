import './UserProfile.css';
import {shallowEqual, useSelector,useDispatch } from 'react-redux';
import { Link} from 'react-router-dom'
const UserProfile = () => 
{
    const arr=useSelector(state => state.bots,shallowEqual);
    const dispatch = useDispatch();
    const buyHandler = (e) =>
    {
        e.preventDefault();
        dispatch({
        type: 'buy',
        payload:e.target.value
        })
    }
   
        
  return (
    <div className="center" >
    {
        
    arr.map((bots)=>(
        <div>
        <div className="row">
            <div className="column">
                <b><p>{bots.bot}</p></b>
                
            </div>
            <div className="column" >
                <dl><br/><br/><dd>Index Value </dd>
                <dd><b style={{color:"green"}}>{bots['index-value']}</b></dd>
                </dl>
            </div>
            <div className="column">
                <dl><br/><br/><dd>Cagr </dd>
                <dd><b style={{color:"green"}}>{bots.cagr}</b></dd>
                </dl>
            </div>
            <div className="column">
                <br/><br/><br/><Link to={{ pathname:'/bots-details/:id/'+bots.id,aboutProps:bots}}>
                    <button type="button" style={{color:"blue",backgroundColor:"white",borderColor:"blue"} }>view algo</button></Link><br />
                   <br/>
            
                <button  type="button" onClick={buyHandler} value={bots.id} style={{color:"blue",backgroundColor:"white",borderColor:"blue"}}>buy <i class="material-icons" style={{fontSize:"20px",color: "black"}}>add_shopping_cart</i></button>
            </div>
        </div>
        {bots.id!=3 && <hr style={{width:"95%",color:"black"}}></hr>}
        </div>
        
        
    ))}
    </div>
  )
}

export default UserProfile