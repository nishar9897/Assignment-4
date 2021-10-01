import './UserProfile.css';
import {useDispatch } from 'react-redux';
const Algo=(props)=>{
   
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
        <div>
        <div className="row">
            <div className="column">
                <b><p>{props.location.aboutProps.bot}</p></b>
                <dd>{props.location.aboutProps.description}</dd>
            </div>
            <div className="column" >
                <dl><br/><br/><dd>Index Value </dd>
                <dd><b style={{color:"green"}}>{props.location.aboutProps['index-value']}</b></dd>
                </dl>
            </div>
            <div className="column">
                <dl><br/><br/><dd>Cagr </dd>
                <dd><b style={{color:"green"}}>{props.location.aboutProps.cagr}</b></dd>
                </dl>
            </div>
            <div className="column">
                <br/><br/><br/>
                <button type="button" onClick={buyHandler} value={props.location.aboutProps} style={{color:"blue",backgroundColor:"white",borderColor:"blue"}}>buy <i class="material-icons" style={{fontSize:"20px",color: "black"}}>add_shopping_cart</i></button>
                <br/><br/><button  type="button" style={{color:"blue",backgroundColor:"white",borderColor:"blue"}}>Moderate Risk <i class="material-icons" style={{fontSize:"20px",color: "red"}}>fmd_bad</i></button>
            </div>
        </div>
        </div>
    </div>
  )

}
export default Algo;