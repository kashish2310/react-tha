import "./Chess.css";
 
function Col(){
    return (
        <div className="col"></div>
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
        <div className="main_board">
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