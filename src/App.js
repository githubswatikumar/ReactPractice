import React, { useEffect } from "react";
//import { connect } from "react-redux";
import { useList } from "./redux/customHooks/useList";
import User from "./components/User";



function App() {
  // function App({userList}) {


   const  { loading, users, error ,dispatchGetUsers} = useList();

   useEffect(() => {
    dispatchGetUsers();
  }, [dispatchGetUsers]);




  // useEffect(() => {
  //   userAction();
  //    console.log("See action")
  return (
    <div className="App">
      <h1>Redux Thunk Tutorial</h1>
      {loading ? (
        <h2>Loading ....</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User users={users} />


      )}
    </div>
  );
}

export default App;
// function mapStateToProps(state) {
//   return { userList: state.userList };
// } 

// const mapDispatchToProps = dispatch => {
//   return {
//     userAction: dispatch(userAction())
//   }
// }

//export default connect(mapStateToProps,mapDispatchToProps)(App);
