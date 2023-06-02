import styled from 'styled-components/native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { TabBar } from 'react-native-tab-view';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.PRIMARY_LIGHT};
    flex: 6;
    width: 100%;
    padding-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const LogoContainer = styled.View`
    height: 80px;
    width: 190px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`; 

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 20px;
`;
