const Styles = theme => ({
    fullOuter: {
        padding: 0,
        // boxSizing: 'border-box',
        // width: 'auto',
        height: '100vh',
        // // display: 'block',
        // overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: 'lightGrey'
    },
    header: {
        padding: 15,
        fontWeight: 'bold',
        fontSize: 25
    },
    question: {
        color: 'blue',
        top: 200
    },
    horizontal: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: '0.1px'
    },
    filterHeader: {
        padding: 5,
        fontWeight: 'bold'
    }
});

export default Styles;