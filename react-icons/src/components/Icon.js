import React from 'react';
import PropTypes from 'prop-types';

const defaultSize = '100%';

const Icon = ({ name, size, color }) => (
  <svg
    xmlns={name.attributes.xmlns}
    viewBox={name.attributes.viewBox}
    style={{ height: size, width: 'auto', fill: color }}
    dangerouslySetInnerHTML={{ __html: name.content }}
  />
);

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: defaultSize,
  color: null,
};

export default Icon;
