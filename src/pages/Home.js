import React from 'react'
import styled from 'styled-components';
import Chart from '../components/Chart';
import Featured from '../components/Featured';
import LgWidget from '../components/LgWidget';
import SmWidget from '../components/SmWidget';
import { userData } from '../dummyData'

const HomeContainer = styled.div`
    flex: 4;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`

const Home = () => {
    return (
        <HomeContainer>
            <Featured />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <HomeWidgets>
                <SmWidget />
                <LgWidget />
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home
