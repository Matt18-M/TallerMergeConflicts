import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.mainText}>Bienvenido a mi aplicación, soy Estudiante2</Text>
        <Text style={styles.frase}>Aprendiendo React Native es divertido</Text>

        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='CONTACTOS'
                    color="#4CAF50"
                    onPress={() => {
                        navigation.navigate('PhoneNumberNav');
                    }}
                />
            </View>

            <Button
                title='PRODUCTOS'
                color="#2196F3"  
                onPress={() => {
                    navigation.navigate('ProductNav');
                }}
            />

        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    frase: {
        fontSize: 16,
        marginBottom: 20,
        color: '#00796b',
        fontStyle: 'italic',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    boton1: {
        marginRight: 60,
    },
});