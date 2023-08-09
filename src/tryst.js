import logo from './universe.jpeg';

function Tryst() {

    return (
        <div >
            <img src={logo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }}/>
            <p>Time, Light, Sub-atomic particles and their physics i.e. 
                quantum mechanics, 2 slit experiment, CERN,
                Nasa, ISRO, ESA
            </p>
        </div>
    );
}

export default Tryst;