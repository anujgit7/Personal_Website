import IMG_3559 from './IMG_3559.jpeg';

function Home () {
    return (
        <div style={styles.div}>
            <p>Greetings!! Hope you are doing well and thank you for taking time out 
                to know me a little better.</p>
            {/* <img source={require('./IMG_3559.jpeg')} style={styles.img}></img> */}
            <img src={IMG_3559} alt={'Profile Photo'} style={styles.img}></img>
        </div>
    ); 
}

const styles = {

    div : {
        display: 'flex',
        flexDirection: 'row',
    },

    img : {
        width:'50%',
        height: '50%',
    }
}

export default Home;