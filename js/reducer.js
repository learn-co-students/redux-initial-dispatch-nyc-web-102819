//starting state as undefined
let state;

function changeState(state= {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

//2. dispatch function is calling changeState() reducer, 
  //changeState() is executed, passing thru 2 local variables(state & action)
  //action is defined b/c we passed tye: '@@INIT' trhu dispatch from step 1
  function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

//add this if you want to display 0 on screen when its initially rendering 
  //1. this is calling our dispatch() func & passing thru our initial action
dispatch({ type: '@@INIT' })