
import React from 'react'
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

import { Line } from 'react-chartjs-2';

import {
    useQuery,
} from '@tanstack/react-query'




const LineChart = () => {
    let labels: string[] = []
    let casesdata: number[] = []
    let deathsdata: number[] = []
    let recovereddata: number[] = []
    Chart.register(CategoryScale);
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
                .then((res) =>
                    res.json(),
                ).then((data) => {
                    // console.log(data)

                    return data
                }
                ),
    })

    if (isPending) return <>'Loading...'</>

    if (error) return <>An error has occurred:  {error.message}</>


    return (

        <div className='   '>
            <div className='bg-white' >
                <Line
                    data={{
                        labels: Object.keys(data.cases),
                        datasets: [
                            {
                                label: 'Covid Cases',
                                data: Object.values(data.cases),

                            },
                        ]
                    }}
                    options={{
                        scales: {
                            y: {
                                min: Math.min(...Object.values(data.cases).map(Number)), // minimum value
                                max: Math.max(...Object.values(data.cases).map(Number)), // maximum value
                            }
                        }
                    }}
                />
            </div>
            <div className='h-5' >

            </div>
            <div className='bg-white'>
                <Line height={400} width={600}
                    data={{
                        labels: Object.keys(data.cases),
                        datasets: [

                            {
                                label: 'Covid Deaths',
                                data: Object.values(data.deaths),
                            }
                        ]
                    }}
                    options={{
                        scales: {
                            y: {
                                min: Math.min(...Object.values(data.deaths).map(Number)), // minimum value
                                max: Math.max(...Object.values(data.deaths).map(Number)), // maximum value
                            }
                        }
                    }}
                />
            </div>

            <div className='h-5'> </div>

            <div className='bg-white'>
                <Line height={400} width={600}
                    data={{
                        labels: Object.keys(data.recovered),
                        datasets: [

                            {
                                label: 'Covid Deaths',
                                data: Object.values(data.recovered),
                            }
                        ]
                    }}
                    options={{
                        scales: {
                            y: {
                                min: Math.min(...Object.values(data.recovered).map(Number)) - 1, // minimum value
                                max: Math.max(...Object.values(data.recovered).map(Number)) + 1, // maximum value
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default LineChart


















// import { Tooltip } from '@material-tailwind/react';
// import React from 'react'
// import { CartesianGrid, LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

// import {
//     QueryClient,
//     QueryClientProvider,
//     useQuery,
// } from '@tanstack/react-query'



// const data = [
//     { name: 'Page A', uv: 10, },
//     { name: 'Page B', uv: 20, },
//     { name: 'Page C', uv: 20, },

// ];

// const LineChart = () => {

//     const { isPending, error, data } = useQuery({
//         queryKey: ['repoData'],
//         queryFn: () =>
//             fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
//                 .then((res) =>
//                     res.json(),
//                 ).then((data) => {
//                     console.log(data)
//                     return data
//                 }
//                 ),
//     })

//     if (isPending) return <>'Loading...'</>

//     if (error) return <>An error has occurred: ' + error.message</>



//     return (
//         <LChart className='bg-white' width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//             <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//         </LChart>
//     )
// }

// export default LineChart