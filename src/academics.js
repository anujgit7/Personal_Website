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

    const data3 = [
        ['Machine Learning Engineer Intern at SPOTIFY', 'May 2022 - Aug 2022'],
        ['Systems Engineer at INFOSYS', 'Jun 2017 - Jan 2020']
    ]

    return (
        <div style={styles.div}>
                
                <h1 style={{fontFamily: "'Comic Sans MS', 'Comic Sans', 'cursive'", marginBottom: '2%'}}>Work Experience</h1>
                <CustomTable data={ data3 } />

                <h1 style={{fontFamily: "'Comic Sans MS', 'Comic Sans', 'cursive'", marginBottom: '2%'}}>MASTER OF SCIENCE</h1>
                <CustomTable data={ data1 } />
                
                <h1 style={{fontFamily: "'Comic Sans MS', 'Comic Sans', 'cursive'", marginBottom: '2%'}}>BACHELOR OF ENGINEERING</h1>
                <CustomTable data={ data2} />
        </div>
    );
}

const styles = {
    div : {
        // padding: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Academics;