import { Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { Header } from '../../components/Header';
import { getCard, getCardById } from "../../services/apiManager";




export function Home() {
    const theme = useTheme();

    const handleBusca = async () => {
        console.log('Iniciando busca');
        const res = await getCard('Passo Élfico', 'Portuguese (Brazil)');
        // 156929
        // const res = await getCardById('386616');
        const final = res.error  ? "Deu erro 500" : JSON.stringify(res.data, null, 2);
        console.log(final);
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 70, backgroundColor: theme.COLORS.BACKGROUND, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HOME</Text>
                <TouchableOpacity
                    style={{ width: 90, height: 40, backgroundColor: theme.COLORS.PRIMARY_DARK, justifyContent: 'center', alignItems: 'center' }}
                    onPress={handleBusca}
                >
                    <Text style={{ color: theme.COLORS.WHITE }}>BUSCAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}