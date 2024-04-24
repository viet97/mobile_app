import React from 'react'
import {
    FlatList,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import { SVG } from '../../../assets/svg'
import AButton from '../../components/AButton'
import Header from '../../components/Header'
import Text from '../../components/Text'
import { Colors } from '../../themes/Colors'
import { IS_ANDROID } from '../../utils/DeviceUtil'
import BaseScreen from '../BaseScreen'

const data = [{
    id: "1",
    sender: "admin",
    date: "2023-12-26 23:20:01",
    url: "123",
    comment: "There’s a repair needed on the wall next to the door D1."
},
{
    id: "2",
    sender: "admin",
    date: "2023-12-26 23:20:01",
    comment: "There’s a repair needed on the wall next to the door D1."
}]
export default class HomeScreen extends BaseScreen {
    constructor(props) {
        super(props)

    }

    _componentDidMount() {
    }


    renderInput = () => {
        return (

            <View
                style={{
                    height: 60,
                    flexDirection: "row",
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    backgroundColor: Colors.white
                }}>
                <AButton
                    hitSlop={12}>
                    <SVG.attachment
                        width={20}
                        height={20} />
                </AButton>
                <View
                    style={{
                        height: 35,
                        borderRadius: 10,
                        borderWidth: 1,
                        overflow: "hidden",
                        borderColor: Colors.cylindrical,
                        flex: 1,
                        marginLeft: 12,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <TextInput
                        style={{
                            flex: 1,
                            fontSize: 16,
                            color: Colors.black60,
                            paddingLeft: 15,
                        }} />
                    <AButton
                        hitSlop={8}>
                        <SVG.send
                            style={{
                                marginHorizontal: 8
                            }} />
                    </AButton>
                </View>
            </View>
        )
    }

    renderItem = ({ item, index }) => {
        return (<View
            style={{
                borderRadius: 10,
                overflow: 'hidden',
                marginTop: 8
            }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    backgroundColor: Colors.black,
                    paddingHorizontal: 8,
                    paddingVertical: 4
                }}>
                <Text
                    style={{
                        flex: 1,
                        fontSize: 16,
                        color: Colors.white
                    }}>
                    {item.sender}
                </Text>
                <Text
                    style={{
                        flex: 1,
                        fontSize: 16,
                        color: Colors.white,
                        textAlign: "right"
                    }}>
                    {item.date}
                </Text>
            </View>

            {item.url ? <View
                style={{
                    width: '100%',
                    aspectRatio: 376 / 165,
                    backgroundColor: 'gray'
                }} /> : null}

            <View
                style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    backgroundColor: Colors.white
                }}>
                <Text
                    style={{
                        color: Colors.black60,
                        fontSize: 16
                    }}>
                    There’s a repair needed on the wall next to the door D1.
                </Text>
            </View>
        </View>)
    }

    renderContent() {
        return (
            <KeyboardAvoidingView
                style={{
                    flex: 1
                }}
                behavior={!IS_ANDROID ? 'padding' : 'height'}>
                <View
                    style={{
                        flex: 1,
                    }}>
                    <Header
                        title="Asilla Security" />
                    <FlatList
                        contentContainerStyle={{
                            paddingTop: 16,
                            paddingHorizontal: 8
                        }}
                        data={data}
                        keyExtractor={(item) => item.id}
                        inverted
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        renderItem={this.renderItem}
                        style={{
                            flex: 1
                        }} />
                    {this.renderInput()}
                </View>
            </KeyboardAvoidingView>
        )

    }
}


const styles = StyleSheet.create({

})