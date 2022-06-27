import React from "react";
import { styles } from "../styles";
import PropTypes from "prop-types";

export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const copycat = this.props.copycat;
    const quietcat = this.props.quietcat;
    const input = this.props.input;
    const handleChange = this.props.handleChange;

    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 80 }}>
          Copy Cat {this.props.name ? this.props.name : "Tom"}
        </h1>
        <input type="text" value={input} onChange={handleChange} />
        <img
          alt="cat"
          src={copying ? copycat : quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>{copying === true && input}</p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  name: PropTypes.string,
};
