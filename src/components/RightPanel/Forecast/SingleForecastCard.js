import { capitalize } from "../../_utils";
import { Card, Col, Row } from "react-bootstrap";
import { format } from 'date-fns';

function ForecastCard(props) {
    const item = props.item;
    const date = new Date(item.dt_txt);

    return (
        <Row className="mt-5">
            <Col lg={12}>
                <Card className="weather-card">
                    <Card.Header className="text-center">
                        <b>{format(date, 'iii, do')}<br></br></b>
                        <b>{format(date, 'HH:mm')}<br></br></b>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <img
                                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                                alt={item.weather[0].description}
                            />
                        </Card.Text>
                        <Card.Text className="weather-description">{capitalize(item.weather[0].description)}</Card.Text>
                        <Card.Text>High: {item.main.temp_max}°C</Card.Text>
                        <Card.Text>Low: {item.main.temp_min}°C</Card.Text>
                        <Card.Text>Wind speed: {item.wind.speed} m/s</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ForecastCard;