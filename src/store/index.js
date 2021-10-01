import { createStore } from "redux";
const authState = {
 isAuthenticated: false,
 cart:[],
 count:0,
 bots:[
    {
       "id":1,
       "bot":"Hot Bot",
       "description":"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
       "index-value":289.34,
       "cagr":34
    },
    {
       "id":2,
       "bot":"Cool Bot",
       "description":"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
       "index-value":439.34,
       "cagr":28
    },
    {
       "id":3,
       "bot":"Options Bot",
       "description":"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
       "index-value":139.34,
       "cagr":42
    }
 ]}


const authReducer = (state = authState, action) => {
   const obj={id:'',bot:'',description:'',['index-value']:'',cagr:''};
   
  if(action.type === "login") {
    return {
      ...state,isAuthenticated: true
    }
  }
  if(action.type ==="buy")
  {
    const idNumber=action.payload;
    const obj=state.bots.filter((x)=>{ return x.id == idNumber; });
    state.cart.push(obj);
    return {
       ...state,count:state.cart.length
    }
  }
  if(action.type === "logout") {
    return {
      isAuthenticated: false
    }
  }

  return state;
}

const store = createStore(authReducer);

export default store;