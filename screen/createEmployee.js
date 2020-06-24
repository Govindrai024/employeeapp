import React, { useState } from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { TextInput, Button,Modal } from 'react-native-paper';


const CreateEmployee = () => {
    const [Name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [picture, setPicture] = useState("");
    const [modal, setModal] = useState(false);

    return (
        <View style={StyleSheet.root}>
            <TextInput
                label='Name'
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                // mode="outlined"
                onChangeText={text => setName({text})}
            />

            <TextInput
                label='email'
                style={styles.inputStyle}
                value={email}
                theme={theme}
                // mode="outlined"
                onChangeText={text => setEmail({text})}
            />
            <TextInput
                label='phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                // mode="outlined"
                onChangeText={text => setPhone({text})}
            />



            {/* <TextInput
                label='salary'
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                // mode="outlined"
                onChangeText={text => setSalary({text})}
            />

            <TextInput
                label='picture'
                style={styles.inputStyle}
                value={picture}
                theme={theme}
                // mode="outlined"
                onChangeText={text => setPicture({text})}
            /> */}



            <Button style={styles.inputStyle}  icon="upload"  theme={theme} mode="contained" onPress={() => setModal(true)}>
               upload image
                </Button>

                <Button style={styles.inputStyle}  icon="content-save"  theme={theme} mode="contained" onPress={() => console.log("save")}>
              save 
                </Button>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
                }}

            >
            
            <View style={styles.modalView}>

                <View style={styles.modalButtonView}>
                        <Button style={styles.inputStyle}   theme={theme} icon="camera" mode="contained" onPress={() => setModal(false)}>
                                camera
                        </Button>
                        <Button  style={styles.inputStyle} theme={theme} icon="image-area" mode="contained" onPress={() => setModal(false)}>
                                gallary
                        </Button>

                </View>
                
                <Button  onPress={() => setModal(false)}>
                        Cancel
                </Button>
                </View>

            </Modal>
        </View>
    )
}

const theme = {
    colors: {
        primary: "red"
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inputStyle: {
        margin: 5
    },
    modalButtonView: {
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        BackgoundColor:"#03fcf0"
    }
})
export default CreateEmployee