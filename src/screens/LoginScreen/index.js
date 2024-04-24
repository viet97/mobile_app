import React from 'react'
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SVG } from '../../../assets/svg'
import AButton from '../../components/AButton'
import Text from '../../components/Text'
import { ROUTER_NAME } from '../../navigation/NavigationConst'
import NavigationService from '../../navigation/NavigationService'
import { Colors } from '../../themes/Colors'
import BaseScreen from '../BaseScreen'

export default class LoginScreen extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            hiddenPassword: true
        }
    }

    _componentDidMount() {
    }

    login = () => {
        NavigationService.getInstance().reset({
            routerName: ROUTER_NAME.HOME.name
        })
    }

    renderContent() {
        const { hiddenPassword } = this.state
        return (
            <View
                style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                    keyboardShouldPersistTaps={'handled'}>
                    <SVG.asilla
                        style={styles.logo}
                        width={100} height={100} />
                    <View
                        style={styles.content}>
                        <View
                            style={styles.idRow}>
                            <TextInput
                                placeholderTextColor={Colors.black60}
                                placeholder='ID'
                                style={styles.input} />
                        </View>

                        <View
                            style={styles.passwordRow}>
                            <TextInput
                                placeholderTextColor={Colors.black60}
                                placeholder='Password'
                                secureTextEntry={hiddenPassword}
                                style={styles.input} />
                            <AButton
                                onPress={() => this.setState({ hiddenPassword: !hiddenPassword })}
                                style={{
                                    width: 22,
                                    height: 22,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                hitSlop={12}>
                                {hiddenPassword ? <SVG.eye width={20} height={20} /> : <SVG.close_eye width={22} height={22} />}
                            </AButton>
                        </View>
                        <AButton
                            onPress={this.login}
                            style={styles.loginButton}>
                            <Text
                                style={styles.login}>
                                Login
                            </Text>
                        </AButton>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    login: {
        fontSize: 16,
        color: Colors.white
    },
    loginButton: {
        width: 100,
        height: 36,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: Colors.black,
        borderRadius: 10
    },
    input: {
        flex: 1,
        height: 60,
        backgroundColor: Colors.white,
        fontSize: 16,
        color: Colors.black60
    },
    passwordRow: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 8
    },
    idRow: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingLeft: 15,
        paddingRight: 15
    },
    content: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        marginTop: "30%"
    },
    logo: {
        marginTop: '40%',
    },
    container: {
        flex: 1,
        // alignItems: 'center'
    },

})