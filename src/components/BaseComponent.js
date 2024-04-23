import React, { Component } from 'react'
import {
    StyleSheet,
    BackHandler
} from 'react-native'

export default class BaseComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        this._componentDidMount && this._componentDidMount();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
        this.mounted = false;
        this._componentWillUnmount && this._componentWillUnmount();
    }

    renderContent() {

    }

    render() {
        return this.renderContent()
    }
}


const styles = StyleSheet.create({

})