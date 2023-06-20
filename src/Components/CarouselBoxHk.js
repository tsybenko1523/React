import {Carousel} from "react-bootstrap";
import MushroomsImg from '../assets/pexels-visually.jpg';
import OceanImg from '../assets/pexels-stephane.jpg';
import FieldImg from '../assets/field.jpg';
import PeaceImg from '../assets/peace.jpg';

import React, {Component} from 'react';
import MushroomsImg from '../assets/pexels-visually.jpg';
import OceanImg from '../assets/pexels-stephane.jpg';
import {Carousel} from "react-bootstrap";



class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={OceanImg}
                alt="Ocean"/>
                <Carousel.Caption>
                    <h3>Ocean image</h3>
                    <p> Далі, далі від душного міста! Серце прагне буять на просторі! Бачу здалека, – хвиля іскриста грає вільно по синьому морі.</p>
                </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBoxHk;

