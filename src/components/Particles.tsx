import ParticlesBg from 'particles-bg';

export default function Background() {
    return (
        <div style={{ position: 'absolute', top: 0, width: '100%', height: '528px', zIndex: 20 }}>
            <ParticlesBg type="square" bg={true} num={20} color='#1e293b'/>
        </div>
    );
}
