import { View, Text, StyleSheet, Button } from 'react-native'

export const Product = ({ navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.welcomeText}>Bienvenidos a mi tienda, soy Estudiante1</Text>
        <Text style={[styles.product]}>Audífonos Bluetooth - $49.99</Text>
        <Text style={[styles.product]}>Smartwatch Pro - $199.99</Text>
        <Text style={[styles.product]}>Power Bank 20000mAh - $39.99</Text>

        <Button
            title='HOME'
            onPress={() => {
                navigation.navigate('Welcome Mateo');
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefae0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    product: {
        fontSize: 18,
        marginVertical: 8,
    },
});