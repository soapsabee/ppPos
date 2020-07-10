import React from 'react'
import PromptPay from '../components/PromptPay'



export default class PromptPayCashier extends React.Component {

    render() {
        return (
            <PromptPay navigation={this.props.navigation} />
        )
    }

}
