import React from "react"
import Chart from "react-apexcharts"

function Graph(){

    const options = {
        labels: ['Jeruk', 'Nanas', 'Anggur', 'Mengkudu', "Buah naga"],
        legend: {
            show: true,
            showForSingleSeries: true,
            showForNullSeries: true,
            position: 'bottom',
            horizontalAlign: 'center', 
            fontSize: '15px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 500,
            offsetX: 0,
            offsetY: 0,
            labels: {
                colors: undefined,
                useSeriesColors: true
            },
            itemMargin: {
                horizontal: 15,
                vertical: 0
            },
            onItemHover: {
                highlightDataSeries: false
            },
        },
        theme: {
            mode: 'light', 
            palette: 'palette10', 
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
            dashArray: 0, 
        },
        chart: {
            brush: {
              target: undefined,
              autoScaleYaxis: false
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 5000,
                animateGradually: {
                    enabled: true,
                    delay: 300
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
    }
    const data = [302, 500, 290, 425, 120]

    return(
        <div
            style={{
                backgroundColor: "white",
                textAlign: "center"
            }}
        >
        <br />
            <h2 style={{color: "blueviolet"}}>Buah - buahan</h2>
            <br />
            <Chart options={options} series={data} type="donut" width={800} />
            <br />
        </div>
    )
}

export default Graph