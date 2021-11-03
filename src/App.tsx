import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import {getCurrencyNames, getExchangeRates} from './redux_store/Reducers/startAppReducer';
import store, { AppStateType } from './redux_store/store';
import { compose } from 'redux';
import {connect, Provider} from "react-redux";
import {BrowserRouter, withRouter} from 'react-router-dom';

type PropsType = {
    getCurrencyNames: () => void,
    getExchangeRates: () => void
}

class App extends Component<PropsType> {
    componentDidMount() {
        this.props.getExchangeRates()
        this.props.getCurrencyNames()
    }
        
    render() {
      
        return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    currencyList: state.startApp.currencyNames
})

const AppContainer: any = compose(
    withRouter,
    connect(mapStateToProps, {getCurrencyNames, getExchangeRates}))(App);

const StartApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default StartApp;
