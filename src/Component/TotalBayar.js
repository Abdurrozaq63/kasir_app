import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  axios  from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/Utils";
import { API_URL } from "../utils/constants";
import { Link } from 'react-router-dom'

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs
    };

    axios.post(API_URL+"pesanans", pesanan)
    .then((res) => {
      //code
    });
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className="fixed-bottom ">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4 tb">
            <h4>
              Total Harga :{" "}
              <strong className="flat-right mr-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h4>
            <Button
              variant="primary"
              black
              className="mb-2 mt-2 mr-4 bp"
              size="md"
              onClick={() => this.submitTotalBayar(totalBayar)} as={Link} to="/sukses"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
