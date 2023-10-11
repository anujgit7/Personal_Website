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
        <div className="academic-div" style={styles.div}>
                
                <h1>MASTER OF SCIENCE</h1>
                <CustomTable data={ data1 } />
                
                <h1>Bachelor of Engineering</h1>
                <CustomTable data={ data2} />
        </div>
    );
}

const styles = {
    div : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Academics;