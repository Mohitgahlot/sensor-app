import React from 'react';
// import Pie from './PieChart';
// import Budget from './Budget';
// import Category from './Category';

import axios from 'axios';
import LineChart from '../../Components/Chart/LineChart';


const Chart = (prods) => {


    // componentDidMount() {
    //     const { user } = this.props;
    //     console.log('User: ', user);
    //     axios.post('/api/order/getOrderHistory', { email: user.email }).then(({ data }) => {
    //         const chart = { ...this.state.chartData };
    //         const category = { ...this.state.categorydata };
    //         const budget = { ...this.state.budgetData };
    //         const blabels = ['November', 'December'];
    //         const bdata = [];
    //         const clabels = [];
    //         const cprice = [];
    //         const labels = [];
    //         const price = [];
    //
    //         data.products.map((data) => {
    //             labels.push(data.name);
    //             price.push(data.price);
    //         });
    //         bdata.push(0);
    //         bdata.push(price.reduce((a, b) => a + b, 0));
    //         data.items.map((data) => {
    //             clabels.push(data.Name);
    //             cprice.push(data.price);
    //         });
    //         budget.labels = blabels;
    //         budget.datasets[0].data = bdata;
    //         category.labels = clabels;
    //         category.datasets[0].data = cprice;
    //         chart.labels = clabels;
    //         chart.datasets[0].data = cprice;
    //
    //         this.setState({
    //             products: data.products,
    //             items: data.items,
    //             chartData: chart,
    //             categorydata: category,
    //         });
    //     });
    // }


    return (
        <div>
            <LineChart onChange={prods.onChange} chartData={prods.lineChart} />
        </div>
    );

};

export default Chart;