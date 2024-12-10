const VerkkokauppaHeader : React.FC = () => {

    const style = {
        
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'lightBlue',
        height: '80px'
    };

    const otsikko = {
        margin: '5px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        
        
    };

    const logo = {

        margin: '5px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        fontFamily: 'Open Sans',
        fontStyle: 'italic',

    }

    return (
        <div style={style}>
            <div style={otsikko}>
                <h2 style={{margin: 0}}>HittiTeePaidat</h2>
            </div>
            <div style={logo}>
                Asiakkaiden iloksi jo vuodesta 2005.
            </div>
        </div>
    );

};

export default VerkkokauppaHeader;