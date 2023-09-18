import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: -113px;
    
    /* background-color: gray;  */
    `;

export const Highlight = styled.FlatList.attrs(() => ({
    contentContainerStyle: {
        paddingTop: 38,
        paddingLeft: 16,
        paddingBottom: 30.5,
        // gap: 32,
        alignItems: 'center'
    }
}))`
`;