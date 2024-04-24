import { Component } from 'react';
import {
    BackHandler,
    StyleSheet,
    View
} from 'react-native';
import { Colors } from '../themes/Colors';

export default class BaseScreen extends Component {
    constructor(props) {
        super(props)
    }

    onBackPress = () => { };

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
        return <View
            style={{
                flex: 1,
                backgroundColor: Colors.backgroundScreen
            }}>
            {this.renderContent()}
        </View>
    }
}


const styles = StyleSheet.create({

})