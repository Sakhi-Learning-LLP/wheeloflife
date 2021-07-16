import React from 'react';
import { Polar} from 'react-chartjs-2';


class Submitted extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: ["Friends and Family",
                "Relationships",
                "Wealth",
                "Personal and Growth",
                "Health",
                "Fun and Recreation",
                "Possession",
                "Career"
            ],
            datasets: [
                {
                    backgroundColor: [
                        'black',
                        '#C9DE00',
                        '#2FDE00',
                        '#00A6B4',
                        '#6800B4',
                        'pink',
                        'orange',
                        'green'
                    ],
                    data: this.props.dropped
                }
            ]
           
        }
    }

    render() {
        console.log(this.state);
        return (
            <Polar
                width={"400%"}
                data={this.state}
                options={{
                    legend: {
                        display: true,
                        position: 'right'
                    }       
                }}
            />
        )
    }
}

export default Submitted;