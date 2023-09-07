import { StyleSheet, Text, View } from "react-native";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#202024',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#fff'
    }
  });