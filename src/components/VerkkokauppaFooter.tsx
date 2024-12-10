const VerkkokauppaFooter : React.FC = () => {

    const style : React.CSSProperties = {

        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
        
    };

    const vuosi = new Date().getFullYear(); 

    return (
        <div style={style}>
        <div>
        Tietotie 3, 02240 Espoo
        </div>
        <div>
        Copyright © HittiTeePaidat {vuosi}
        </div>

        </div>
    );

};

export default VerkkokauppaFooter;