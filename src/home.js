import IMG_3559 from './IMG_3559.jpeg';

function Home () {
    return (
        <div style={styles.div}>
            {/* 2 divs */}
            <div>

                <h1 style={{fontFamily: "'Comic Sans MS', 'Comic Sans', 'cursive'", backgroundColor: '#F0FFF0', color: '#4B0082', textAlign: 'center'}}> WELCOME </h1>
                <p style={styles.p}>
                I hope you are doing well and thank you for taking time out 
                to know me a little better.<br /><br />
                I am a Full Stack Developer with a keen interest in Data Structures, 
                Algorithms and web development.<br />
                I also have experience in Data Science, Machine Learning 
                and Data Analytics.<br />
                To know more about me, dive in!!
                <br /><br />
                Regards<br />
                Anuj Johri
                </p>
            
            </div>

            <div>
                <div style={{maxHeight: '100%', display:'grid', gridTemplateColumns: 'repeat(1, 1fr)'}}>
                    
                    <div style={styles.div1}>
                        <img src={IMG_3559} alt={'Profile Photo'} style={styles.img}></img>
                    </div>
                    
                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            
                        <h4>Quick Links</h4>
            
                        <div style={{width: '22%', display:'flex', justifyContent: 'space-between'}}>
                            <i className="ci ci-linkedin ci-md"></i>
                            <a href='https://www.linkedin.com/in/anuj-johri/' target='_blank'>Linkedin</a>
                        </div>
            
                        <div style={{width: '22%', display:'flex', justifyContent: 'space-between'}}>
                            <i className="ci ci-github ci-md"></i>
                            <a href='https://github.com/AJ-ANUJ' target='_blank'>Github</a>
                        </div>

                        <div style={{width: '22%', display:'flex', justifyContent: 'space-between'}}>
                            <i className="ci ci-instagram ci-md"></i>
                            <a href='https://instagram.com/anuj_johri?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='_blank'>Instagram</a>
                        </div>
                        {/* <div>
                            <a href='http://wellfound.com/u/anuj-johri-3' target='_blank'>Portfolio</a>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    ); 
}

const styles = {

    div : {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '2%',
        padding: '5%',
        // height: '100vh',
    },

    container: {
        alignItems: 'Center',
    },

    div1 : {
        maxWidth: '100%',
        maxHeight: '100%',
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

    img : {
        maxWidth: '60%',
        // aspectRatio: '1/1',
        // objectFit: 'cover',
        // margin: '10px',
        // width:'30%',
        // height: '30%',
        // padding: '70px'
    },

    p : {
        fontFamily: "'Comic Sans MS', 'Comic Sans', 'cursive'",
        // fontSize: '60px',
        // maxWidth: '60%',
        // // height: '30%',
        // margin: '80px',
        // // padding: '70px',
        backgroundColor: '#F0FFF0',
        // textAlign: 'center',
        color: '#4B0082',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
    }
}

export default Home;