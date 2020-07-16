import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {authAPI} from "../../API/api";


class HeaderContainer extends React.Component {
    componentDidMount = () => {
        authAPI.getAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;//деструктуризация
                    this.props.setAuthUserData(id, email, login);
                }
            });
    };

    render =()=> {
        return <>
            <Header { ...this.props} />
        </>
    };
}
const mapStateToProps =(state)=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userPhoto: state.auth.img
});
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);