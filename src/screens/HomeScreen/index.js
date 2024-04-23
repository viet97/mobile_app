import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import LoadingManager from '../../components/Loading/LoadingManager'
import NavigationService from '../../navigation/NavigationService'
import BaseScreen from '../BaseScreen'

export default class HomeScreen extends BaseScreen {
    constructor(props) {
        super(props)

    }

    _componentDidMount() {
        // LoadingManager.getInstance().visibleLoading(true)
    }


    renderContent() {
        <View>

        </View>
    }
}


const styles = StyleSheet.create({

})