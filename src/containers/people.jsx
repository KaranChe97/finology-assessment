import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { ReactComponent as HeartIcon } from '../assets/7-icons/heart.svg';
import { ReactComponent as ArrowRight } from '../assets/7-icons/arrow-right.svg';
import { Title } from '../components';

function People() {
        return (
            <div className="content-box">
                <div className="people-slider-box">
                    <div className="people-slider-title-container">
                        <div className="people-opinion-wrapper">
                            <HeartIcon />
                            <Title> what other people say about our services </Title>
                        </div>
                           
                        <div>
                            <ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default People;