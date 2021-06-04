import React from 'react';
import { Line } from 'react-chartjs-2';

/*LineChart makes use of the react-chartjs-2 library 
to plot a graph for the user
*/
function LineChart() {
    return ( 
        <div>
            <Line
                data={
                    {
                        
                        labels: ['Begin', 'End'],
                        datasets: [{
                            data: [12, 17],
                            borderWidth: 1
                        }]
                    }
                }
                
                height={400}
                width={600}
                options={
                    {
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                }
            />  
            </div>
    )
}

export default LineChart