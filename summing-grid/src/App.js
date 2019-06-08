import React, {Component} from 'react';
import './App.css';
import GridItem from "./components/GridItem";
import Grid from "./components/Grid";
import NumInput from "./components/NumInput";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {values: [0, 0, 0], sum: 0};
    }

    valueChangeFn = (index) => {
        return (evt) => {
            const values = [...this.state.values];
            values[index] = evt.target.value;
            this.setState({values: values, sum: this.calcSum(values)});
        }
    };

    calcSum(values) {
        return App.formatNearest3Digits(values.reduce((a, v) => Number(a) + Number(v)))
    }


    render() {
        return (
            <div className="App">
                <Grid>
                    <GridItem><NumInput onChange={this.valueChangeFn(0)}/></GridItem>
                    <GridItem><NumInput onChange={this.valueChangeFn(1)}/></GridItem>
                    <GridItem><NumInput onChange={this.valueChangeFn(2)}/></GridItem>
                    <GridItem><span>{this.state.sum}</span></GridItem>
                </Grid>
            </div>
        );
    }

    static formatNearest3Digits(num) {
        let exp = num.toExponential(2) + "";
        let p = parseInt(exp.substring(exp.indexOf("+") + 1, exp.length), 10);
        let n = exp.substring(0, exp.indexOf("e")).replace(".", "");

        console.log(n, p, Math.pow(10, p - 3), n * Math.pow(10, p - 3))
        if (p < 3)
            return num;
        if (p < 6)
            return this.insertDot(n, p - 2) + "K";
        if (p < 9)
            return this.insertDot(n, p - 5) + "M";
        if (p < 12)
            return this.insertDot(n, p - 8) + "G";
        if (p < 15)
            return this.insertDot(n, p - 11) + "T";
        if (p < 18)
            return this.insertDot(n, p - 14) + "P";
        return "Number too big!";
    }

    static insertDot(str, index) {
        return str.substr(0, index) + (index < str.length ? '.' + str.substr(index) : "");
    }
}

export default App;
