import { Container, Text, LogoContainer } from './styles';
import { Image } from 'react-native'

export function Header() {
    const logoSize = 70;

    return (
        <Container>
            <LogoContainer>
                <Image style={{ height: logoSize, width: logoSize }} source={require('../../assets/logo.png')} />
                <Text>
                    Magic The Deck
                </Text>
            </LogoContainer>
        </Container>
    )
}