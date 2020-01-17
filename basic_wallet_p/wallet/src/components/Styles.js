import styled from 'styled-components'

export const TransactionDiv = styled.div`
    display: flex;
    width: 800px;
    /* align-self: center; */
    justify-content: space-between;
    background: ${props => props.color};
`;

export const LedgerDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

export const PageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    
`;

export const UserAndRecipient = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
`;