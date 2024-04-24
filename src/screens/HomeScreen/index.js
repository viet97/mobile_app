import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import BaseScreen from '../BaseScreen'

export default class HomeScreen extends BaseScreen {
    constructor(props) {
        super(props)

    }

    _componentDidMount() {
    }


    renderContent() {
        return (
            <View
                style={{
                    flex: 1,
                }}>

            </View>
        )

    }
}


const styles = StyleSheet.create({

})