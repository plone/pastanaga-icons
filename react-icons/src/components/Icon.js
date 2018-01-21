import React from 'react';
import PropTypes from 'prop-types';

const defaultSize = '24px';

const Icon = ({ glyph, size, color }) => (
  <svg
    xmlns={glyph.attributes.xmlns}
    viewBox={glyph.attributes.viewBox}
    style={{ height: size, width: 'auto', fill: color }}
    dangerouslySetInnerHTML={{ __html: glyph.content }}
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
