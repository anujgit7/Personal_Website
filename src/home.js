import IMG_3559 from './IMG_3559.jpeg';

function Home () {
    return (
        <div style={styles.div1}>
            <div style={styles.div}>
            <p style={styles.p}>Welcome!!<br />
            I hope you are doing well and thank you for taking time out 
            to know me a little better.<br /></p>
            </div>

            <div style={styles.div}>
            {/* <img source={require('./IMG_3559.jpeg')} style={styles.img}></img> */}
            <img src={IMG_3559} alt={'Profile Photo'} style={styles.img}></img>
            </div>

            <div style={styles.div}>
            </div>
            
            <div style={{...styles.div, flexDirection: 'column'}}>
            
            <h4>Quick Links</h4>
            
            <div>
                <i className="ci ci-linkedin ci-md"></i>
                <a href='https://www.linkedin.com/in/anuj-johri/' target='_blank'>Linkedin</a>
            </div>
            
            <div>
                <i className="ci ci-github ci-md"></i>
                <a href='https://github.com/AJ-ANUJ' target='_blank'>Github</a>
            </div>

            <div>
            <i className="ci ci-instagram ci-md"></i>
            <a href='https://instagram.com/anuj_johri?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'>Instagram</a>
            </div>
            <div>
                <a href='http://wellfound.com/u/anuj-johri-3' target='_blank'>Portfolio</a>
            </div>
            
            </div>
        </div>
    ); 
}

const styles = {

    div : {
        margin: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    quickLink: {
        margin: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    div1 : {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '2%',
        padding: '5%',
    },

    img : {
        maxWidth: '60%',
        aspectRatio: '1/1',
        objectFit: 'cover',
        // margin: '10px',
        // width:'30%',
        // height: '30%',
        // padding: '70px'
    },

    p : {
        // fontFamily: "'Comic Sans MS', 'Comic Sans', 'cursive'",
        // // fontSize: '60px',
        // maxWidth: '60%',
        // // height: '30%',
        // margin: '80px',
        // // padding: '70px',
        backgroundColor: '#F0FFF0',
        textAlign: 'center',
        color: '#4B0082',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
    }
}

export default Home;