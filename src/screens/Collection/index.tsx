import { Text, TextStyle, View } from "react-native";
import { useTheme } from "styled-components";
import { Header } from "../../components/Header";

export function Collection() {
    const theme = useTheme();
    return (
        <View style={{flex: 1}}>
            <Header />
            <View style={{ flex: 70, backgroundColor: theme.COLORS.BACKGROUND, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize: 20}}>Em desenvolvimento...</Text>
            </View>
        </View>
    )
}