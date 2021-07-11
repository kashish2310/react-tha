import './Chess.css';
const mainBoard={
        width: '439px',
        height: '439px',
        border: '1px solid black',
        display: 'flex',
        position: 'absolute',
        top: '20%',
        left: '35%',
        boxShadow: '3px 3px 4px 4px black'
}
 
const Colu={
    width: '53px',
    height: '53px',
    border: '1px solid black'
}
function Col(){
    return (
        <div className="col" style={Colu}></div>
    );
}
function Row(){
    return (
        <div className="row">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </div>
    );
}
function Chess(){
    return(
        <div className="main_board" style={mainBoard}>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
        </div>
    );
}
export default Chess;