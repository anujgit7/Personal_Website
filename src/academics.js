import CustomTable from "./CustomTable";

function Academics () {

    const data1 = [
        ['Master Of Science in Computer Science', '2021 - 2022'],
        ['Stony Brook University', 'Stony Brook, NY']
    ];

    const data2 = [
        ['B.E. in Electronics and Communication', '2013 - 2017'],
        ['Visvesvarya Technological University', 'Bangalore']
    ]

    return (
        <div style={styles.div}>
                
                <h1 style={{margin: '2%'}}>MASTER OF SCIENCE</h1>
                <CustomTable data={ data1 } />
                
                <h1 style={{margin: '2%'}}>BACHELOR OF ENGINEERING</h1>
                <CustomTable data={ data2} />
        </div>
    );
}

const styles = {
    div : {
        padding: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Academics;