import React from 'react'
import AddTypeProduct from '../components/AddTypeProduct'
export default class CategoryAdd extends React.Component {


  state = {

    search: ''
  }

  render() {

    return (

    
        <AddTypeProduct TypeAdd={"หมวดหมู่สินค้า"}/>
    
    )
  }
}

